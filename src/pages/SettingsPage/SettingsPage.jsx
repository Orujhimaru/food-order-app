import { useParams } from "react-router-dom";
import "./SettingsPage.scss";
import SettingsSideBar from "./SettingsSideBar";
import NavBar from "../../components/NavBar/NavBar";

function SettingsPage() {
  const { section } = useParams();

  const sectionComponents = {
    "product-management": (
      <div className="settings-page-content">
        <div className="sidebar-container">
          <NavBar />
        </div>
        <div className="settings-sideibar-container">
          <h1 className="settings-text">Settings</h1>
          <SettingsSideBar />
        </div>
        <div className="main-content">Product-management</div>
      </div>
    ),
    "your-restaurant": (
      <div className="settings-page-content">
        <div className="sidebar-container">
          <NavBar />
        </div>
        <div className="settings-sideibar-container">
          <h1 className="settings-text">Settings</h1>
          <SettingsSideBar />
        </div>
        <div className="main-content">your-restaurant</div>
      </div>
    ),
  };

  return <main className="settings-page">{sectionComponents[section]}</main>;
}

export default SettingsPage;
