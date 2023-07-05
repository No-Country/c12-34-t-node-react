import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100  w-full fixed top-0 left-0 right-0 main-content z-50">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">Fitness Center Gym</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a>Link</a></li>
      <li> <a>Galeria</a></li>
      <li> <a>Staff</a></li>
      <li><a>Contacto</a></li>
      <button class="bg-blue-500">Ingresar</button>
    </ul>
  </div>
</div>
    </div>
  )
}

export default Navbar
