import React from 'react'
import { Dock, NavBar, Welcome } from '#components'
import { Draggable } from 'gsap/Draggable'
import gsap from 'gsap'
import { Finder, Resume, Safari, Terminal, Text, Image, Contact } from '#windows'
gsap.registerPlugin(Draggable)

const App = () => {
  return (
    <main>
      <NavBar />
      <Welcome />
      <Dock />
      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Text />
      <Image />
      <Contact />
    </main>
  )
}

export default App