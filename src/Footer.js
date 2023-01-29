function Footer() {
  return (
    <footer>
      <div className="section1">
        <div className="logo">
          <img src="logo.svg" alt="logo" />
        </div>
        <div className="links">
          <p>Links</p>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservation</li>
            <li>Order Online</li>
            <li>Login</li>
          </ul>
        </div>
        <div className="contact-us">
          <p>Contact Us</p>
          <b>Little Lemon Restaurant</b><br />
          402 Maple Street<br />
          Los Angeles<br />
          CA<br />
          California<br />
          714-410-5216<br />
        </div>
        <div className="find-us">
          <p>Find Us On</p>
          <ul>
            <li>Facebook</li>
            <li>Tweeter</li>
            <li>Youtube</li>
          </ul>
        </div>
      </div>
      <div className="section2">
        <p>Design by Madushan Jayawardane</p>
      </div>
    </footer>
  );
}

export default Footer;