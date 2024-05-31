import "./Header.scss";

function Header() {
  return (
    <div className="header">
      <div className="headerDate">
        <h1>Jaegar Resto</h1>
        <p>Tuesday,2 Feb 2021</p>
      </div>
      <div className="headerSearch">
        <img
          className="headerIcon"
          src="src/assets/search.png"
          alt="Search Icon"
        />

        <input placeholder="Search for food, coffee, etc..." type="text" />
      </div>
    </div>
  );
}

export default Header;
