import React from "react"
import { Link } from "gatsby"

import styles from "./gnav.module.scss"

export default function Gnav() {
  return <div className={styles.gnav}>
    <Link to="/" className={styles.gnav__link}>Home</Link>
    <Link to="/contact/" className={styles.gnav__link}>Contact</Link>
    <Link to="/about/" className={styles.gnav__link}>About</Link>
    <a href="https://github.com/genlivre" className={styles.gnav__btn} target="_blank">github</a>
  </div>
}
