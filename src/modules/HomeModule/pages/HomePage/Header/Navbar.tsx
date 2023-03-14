import React from "react"

import styles from './Navbar.module.scss'
import NetflixTitle from '../../../../../assets/images/header/NETFLIX.svg';


const Navbar: React.FC = () => {
    return <div className={styles.logo}>
        <img src={NetflixTitle} alt='Netflix Logo' />
        </div>
}

export default Navbar;
