

const Header = () => {

  return (
    <div className="navbar w100 flex-grow-1">
  <div className="navbar-start">
    <a className="btn btn-ghost normal-case text-xl">Fitness Center</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Item 1</a></li>
      <li tabIndex="0">
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Item 3</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn rounded-full">Button</a>
  </div>
</div>
  )
}

export default Header