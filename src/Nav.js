function Nav() {
  return (
    <nav>
      <div className="logo">
        <img src="logo.svg"></img>
      </div>
      <div className="menu">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Menu</a></li>
          <li><a href="#">Reservation</a></li>
          <li><a href="#">Order Online</a></li>
          <li><a href="#">Login</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;