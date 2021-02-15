import React from "react"
import { Link } from "gatsby"
import Gnav from "../components/gnav"
import Header from "../components/header"
import Container from "../components/container"

export default function Home() {
  return <div>
    <Gnav />
    <Container>
      <Header headerText="Gatsby Tutorial Playing!" />
      <p>User name is Genta.</p>
      <h2>Turtorial 1</h2>
      <p>☑ページの追加</p>
      <ul>
        <li><Link to="/contact/">Contact</Link></li>
        <li><Link to="/about/">About</Link></li>
      </ul>

      <h2>Turtorial 2</h2>
      <p>☑スタイルの追加方法</p>
      <ul>
        <li><Link to="/about-css-modules/">about-css-modules.js</Link></li>
      </ul>


      <div><img src="https://source.unsplash.com/random/400x200" alt="" /></div>
    </Container>
  </div>
}
