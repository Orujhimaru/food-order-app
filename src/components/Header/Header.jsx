import "./Header.scss";
import moment from "moment";
import search from "../../assets/search.png";
function Header({ onInputChange }) {
  const currentDate = moment().format("dddd, d MMM YYYY");

  return (
    <div className="header">
      <div className="headerDate">
        <h1>Jaegar Resto</h1>
        <p>{currentDate}</p>
      </div>
      <div className="headerSearch">
        <img className="headerIcon" src={search} alt="Search Icon" />
        <input
          name="description"
          type="text"
          onChange={(event) => onInputChange(event.target.value)}
          placeholder="Search for food, coffee, etc..."
        ></input>
      </div>
    </div>
  );
}

export default Header;
