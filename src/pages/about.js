import React from "react"
import { Link } from "gatsby"
import Gnav from "../components/gnav"
import Header from "../components/header"
import Container from "../components/container"

export default function About() {
  return (
    <div>
      <Gnav />
      <Container>
        <Link to="/">Home</Link>
        <Header headerText="About Gatsby" />
        <p>Such wow. Very React.</p>
      </Container>
    </div>
  )
}
