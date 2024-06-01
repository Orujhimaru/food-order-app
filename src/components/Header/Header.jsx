import "./Header.scss";
import moment from "moment";

function Header() {
  const currentDate = moment().format("dddd,  MMM YYYY");

  return (
    <div className="header">
      <div className="headerDate">
        <h1>Jaegar Resto</h1>
        <p>{currentDate}</p>
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
