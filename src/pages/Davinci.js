import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Chatroom from '../components/chatroom/Chatroom'

const Davinci = () => {
  return (
    <div>
      <Navbar />
      <Chatroom title="Davinci" title_desc="The Davinci model understands and generates natural language." />
    </div>
  )
}

export default Davinci