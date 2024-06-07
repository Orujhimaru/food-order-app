import "./ProductManagement.scss";
import { NavLink } from "react-router-dom";
import appearanceImage from "../../assets/Appereance.png";
import restaurantImage from "../../assets/Restaurant.png";
import discountImage from "../../assets/Discount.png";
import notificationImage from "../../assets/Notification.png";
import securityImage from "../../assets/Security.png";
import aboutImage from "../../assets/About Us.png";

function ProductManagement() {
  return (
    <div className="settings-menu">
      <ul>
        <li className="settings-menu-item">
          <NavLink
            to="/settings/appearance"
            className={({ isActive }) =>
              isActive ? "settings-menu-active" : ""
            }
          >
            <div className="item-content">
              <img className="settings-menu-icon" src={appearanceImage} />

              <span className="settings-menu-text">Appearance</span>
            </div>
            <span className="settings-menu-description">
              Dark and Light mode, Font size
            </span>
          </NavLink>
        </li>
        <li className="settings-menu-item">
          <NavLink
            to="/settings/your-restaurant"
            className={({ isActive }) =>
              isActive ? "settings-menu-active" : ""
            }
          >
            <div className="item-content">
              <img className="settings-menu-icon" src={restaurantImage} />
              <span className="settings-menu-text">Your Restaurant</span>
            </div>
            <span className="settings-menu-description">
              Dark and Light mode, Font size
            </span>
          </NavLink>
        </li>
        <li className="settings-menu-item">
          <NavLink
            to="/settings/product-management"
            className={({ isActive }) =>
              isActive ? "settings-menu-active" : ""
            }
          >
            <div className="item-content">
              <img className="settings-menu-icon" src={discountImage} />
              <span className="settings-menu-text">Products Management</span>
            </div>
            <span className="settings-menu-description">
              Manage your product, pricing, etc
            </span>
          </NavLink>
        </li>
        <li className="settings-menu-item">
          <NavLink
            to="/settings/notifications"
            className={({ isActive }) =>
              isActive ? "settings-menu-active" : ""
            }
          >
            <div className="item-content">
              <img className="settings-menu-icon" src={notificationImage} />
              <span className="settings-menu-text">Notifications</span>
            </div>
            <span className="settings-menu-description">
              Customize your notifications
            </span>
          </NavLink>
        </li>
        <li className="settings-menu-item">
          <NavLink
            to="/settings/security"
            className={({ isActive }) =>
              isActive ? "settings-menu-active" : ""
            }
          >
            <div className="item-content">
              <img className="settings-menu-icon" src={securityImage} />
              <span className="settings-menu-text">Security</span>
            </div>
            <span className="settings-menu-description">
              Configure Password, PIN, etc
            </span>
          </NavLink>
        </li>
        <li className="settings-menu-item">
          <NavLink
            to="/settings/about"
            className={({ isActive }) =>
              isActive ? "settings-menu-active" : ""
            }
          >
            <div className="item-content">
              <img className="settings-menu-icon" src={aboutImage} />
              <span className="settings-menu-text">About Us</span>
            </div>
            <span className="settings-menu-description">
              Find out more about Posly
            </span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default ProductManagement;
