import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Home() {
  return <div style={{ color: `purple`, fontSize: `72px` }}>
    <Link to="/contact/">Contact</Link>
    <Link to="/about/">About</Link>
    <a href="https://github.com/genlivre" target="_blank">github</a>
    <Header headerText="Gatsby Testing Page!" />
    <p>User name is Genta.</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
  </div>
}
