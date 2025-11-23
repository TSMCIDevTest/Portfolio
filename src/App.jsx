import React from 'react'
import { Dock, NavBar, Welcome } from '#components'
import { Draggable } from 'gsap/Draggable'
import gsap from 'gsap'
import { Safari, Terminal } from '#windows'
gsap.registerPlugin(Draggable)

const App = () => {
  return (
    <main>
      <NavBar />
      <Welcome />
      <Dock />
      <Terminal />
      <Safari />
    </main>
  )
}

export default App