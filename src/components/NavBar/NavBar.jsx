import "./NavBar.scss";

function NavBar() {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="logo">
          <img src="public/app_logo.svg"></img>
        </li>

        <li className="passive">
          <a href="/" className="">
            <img src="public/homepage.svg"></img>
          </a>
        </li>

        <li className="">
          <a href="/dashboard" className="" aria-current="page">
            <img src="public/dashboard.svg"></img>
          </a>
        </li>

        <li className="passive">
          <a
            href="/settings/product-management"
            className=""
            aria-current="page"
          >
            <img src="public/settings.svg"></img>
          </a>
        </li>

        <li className="passive exit-logo">
          <a href="/exit" className="" aria-current="page">
            <img src="public/exit.svg"></img>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
