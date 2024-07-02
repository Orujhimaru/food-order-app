function returnOrderReportElements() {
  return <div></div>;
}

function NavBar() {
  return (
    <nav>
      <ul class="nav-list">
        <li class="active">
          <a href="index.html" aria-current="page">
            Home
          </a>
        </li>
      </ul>
      renderNavBar()
    </nav>
  );
}

export default NavBar;
