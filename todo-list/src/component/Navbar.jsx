import React from 'react'

export default function Navbar() {
  return (
    <nav className='Nav'>
        <div onClick={()=>{ window.scrollTo(0, 0)}} id='Title'>Todo-List</div>
    </nav>
  )
}
