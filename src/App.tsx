import React from 'react';
import { HomePage } from "@modules";
import { MainMenuGlobalComponent } from "@/global-components";

const App: React.FC = () => (
  <>
    <MainMenuGlobalComponent />
    <HomePage msg="Netflix project" />
  </>
);

export default App;
