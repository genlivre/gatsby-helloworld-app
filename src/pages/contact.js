import React from "react"
import { Link } from "gatsby"
import Gnav from "../components/gnav"
import Header from "../components/header"
import Container from "../components/container"

export default function Contact() {
  return (
    <div>
      <Gnav />
      <Container>
        <Link to="/">Home</Link>
        <Header headerText="Contact" />
        <p>Send us a message!</p>
      </Container>
    </div>
  )
}
