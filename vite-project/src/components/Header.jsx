function Header() {
  return (
    <>
      <nav className="flex justify-around  bg-purple-200 h-16 p-5" id="navbar">
        <div className="hover:font-bold cursor-pointer logo"> Shop Now </div>
        <ul>

          <li className="flex gap-4 cursor-pointer" id="nav_li">
            <a className="hover:font-bold" href="/" id="Home">Home</a>
            <a className="hover:font-bold" href="/" id="About">About</a>
            <a className="hover:font-bold" href="/" id="Products">Products</a>
          </li>
          </ul>
        
      </nav>
    </>
  )
}

export default Header