import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Chatroom from '../components/chatroom/Chatroom';

const Codex = () => {
  return (
    <div>
      <Navbar />
      <Chatroom title="Codex" title_desc="The Codex model understands and generates code." />
    </div>
  )
}

export default Codex