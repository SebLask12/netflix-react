import React, { useRef, useReducer, useEffect } from "react";

import MovieItem from "@/global-components/MovieItem";

import classes from "./Slider.module.scss";

import Image1 from "../../../../../assets/images/section1/1.png";
import Image2 from "../../../../../assets/images/section1/2.png";
import Image3 from "../../../../../assets/images/section1/3.png";
import Image4 from "../../../../../assets/images/section1/4.png";
import Image5 from "../../../../../assets/images/section1/5.png";
import Image6 from "../../../../../assets/images/section1/6.png";

import ArrowRight from "../../../../../assets/images/arrow-down.svg";

type Image = {
  id: number;
  src: string;
  alt: string;
};

const images1: Image[] = [
  { id: 1, src: Image1, alt: "Breaking Bad" },
  { id: 2, src: Image2, alt: "Walking Dead" },
  { id: 3, src: Image3, alt: "Vikings" },
  { id: 4, src: Image4, alt: "Pekay Blinders" },
  { id: 5, src: Image5, alt: "the Office" },
  { id: 6, src: Image6, alt: "Lucifer" },
  { id: 7, src: Image3, alt: "Vikings" },
  { id: 8, src: Image2, alt: "Walking Dead" },
  { id: 9, src: Image1, alt: "Breaking Bad" },
  { id: 10, src: Image4, alt: "Pekay Blinders" },
];

interface State {
  position: number;
  images: Image[];
  slided: boolean;
  index: number;
  isDragging: boolean;
  dragStart: number;
  dragDistance: number;
}

type Action =
  | { type: "nextSlide" }
  | { type: "prevSlide" }
  | { type: "START_DRAG"; payload: number }
  | { type: "DRAG"; payload: number; ref: number }
  | { type: "STOP_DRAG" };

const initialState: State = {
  position: 0,
  images: images1,
  slided: false,
  index: 1,
  isDragging: false,
  dragStart: 0,
  dragDistance: 0,
};

const sliderReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "nextSlide":
      return {
        ...state,
        // position: state.position - 256,
        position: state.index * -256,
        slided: true,
        // images: [...state.images, state.images[state.index]!],
        images: [...state.images, state.images[state.index]],
        index: state.index === state.images.length - 1 ? 0 : state.index + 1,
      };
    case "prevSlide": {
      const img = state.images.slice(1);
      return {
        ...state,
        // position: state.position + 256,
        position: state.index * -256,
        // images: [state.images[state.images.length-state.index]!, ...state.images],
        images: img,
        index: state.index === 0 ? state.images.length - 1 : state.index - 1,
      };
    }
    case "START_DRAG":
      return { ...state, isDragging: true, dragStart: action.payload };
    case "DRAG": {
      const containerWidth = action.ref;
      const dragDistance = action.payload - state.dragStart;
      const maxDragDistance = 256;

      if (dragDistance < -maxDragDistance) {
        console.log("move");
        return {
          ...state,
          position: state.index * -256,
          dragStart: action.payload,
          index: state.index === state.images.length - 1 ? 0 : state.index + 1,
        };
      } else if (dragDistance > maxDragDistance) {
        return {
          ...state,
          position: state.index * -256,
          dragStart: action.payload,
          index: state.index === 0 ? state.images.length - 1 : state.index - 1,
        };
      } else {
        return { ...state, dragDistance };
      }
    }
    case "STOP_DRAG":
      return { ...state, isDragging: false, dragDistance: 0 };
    default:
      return state;
  }
};

type Props = {
  title: string;
};

const Slider: React.FC<Props> = ({ title }) => {
  const [state, dispatch] = useReducer(sliderReducer, initialState);
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleNextSlide = () => {
    dispatch({ type: "nextSlide" });
    console.log("next slide");
  };

  const handlePrevSlide = () => {
    dispatch({ type: "prevSlide" });
  };

  useEffect(() => {
    if (containerRef.current !== null) {
      if (
        state.position ===
        -(wrapperRef.current!.offsetWidth - containerRef.current.offsetWidth)
      ) {
        dispatch({ type: "prevSlide" });
      }
    }
  }, [state.position, containerRef.current, wrapperRef.current]);

  const containerStyle = {
    transform: `translateX(${state.position}px)`,
    transition: "transform 0.5s ease-out",
    width: `${state.images.length * 256}px`,
  };

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    dispatch({ type: "START_DRAG", payload: event.clientX });
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (state.isDragging) {
      dispatch({
        type: "DRAG",
        payload: event.clientX,
        ref: containerRef.current!.offsetWidth,
      });
    }
  };

  const handleMouseUp = () => {
    dispatch({ type: "STOP_DRAG" });
  };

  return (
    <div
      className={classes.slider}
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div className={classes.sliderTitle}>{title}</div>
      <div
        className={classes.container}
        ref={wrapperRef}
        style={containerStyle}
      >
        {state.images.map((image, i) => (
          <MovieItem key={i} src={image.src} alt={image.alt} />
        ))}
      </div>
      <button
        className={`${classes.arrow} ${classes.arrowRight}`}
        onClick={handleNextSlide}
      >
        <span className={classes.arrow__circle}>
          <img className={classes.arrow__circleArrow} src={ArrowRight} />
        </span>
      </button>
      {state.slided && (
        <button
          className={`${classes.arrow} ${classes.arrowLeft}`}
          onClick={handlePrevSlide}
          
        >
          <span className={classes.arrow__circle} style={{ marginLeft: "58px" }}>
            <img
              className={classes.arrow__circleArrow}
              src={ArrowRight}
              style={{ rotate: "180deg" }}
            />
          </span>
        </button>
      )}
    </div>
  );
};

export default Slider;
