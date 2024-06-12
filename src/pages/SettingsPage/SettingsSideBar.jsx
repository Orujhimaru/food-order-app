import React from "react";
import { NavLink } from "react-router-dom";
import appearanceImage from "../../assets/Appereance.png";
import restaurantImage from "../../assets/Restaurant.png";
import discountImage from "../../assets/Discount.png";
import notificationImage from "../../assets/Notification.png";
import securityImage from "../../assets/Security.png";
import aboutImage from "../../assets/About Us.png";
import "./SettingsSideBar.scss";

const menuItems = [
  {
    to: "/settings/appearance",
    icon: appearanceImage,
    text: "Appearance",
    description: "Dark and Light mode, Font size",
  },
  {
    to: "/settings/your-restaurant",
    icon: restaurantImage,
    text: "Your Restaurant",
    description: "Dark and Light mode, Font size",
  },
  {
    to: "/settings/product-management",
    icon: discountImage,
    text: "Products Management",
    description: "Manage your product, pricing, etc",
  },
  {
    to: "/settings/notifications",
    icon: notificationImage,
    text: "Notifications",
    description: "Customize your notifications",
  },
  {
    to: "/settings/security",
    icon: securityImage,
    text: "Security",
    description: "Configure Password, PIN, etc",
  },
  {
    to: "/settings/about",
    icon: aboutImage,
    text: "About Us",
    description: "Find out more about Posly",
  },
];

function SettingsSideBar() {
  return (
    <div className="settings-menu">
      <ul>
        {menuItems.map((item, index) => (
          <li className="settings-menu-item" key={index}>
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                isActive ? "settings-menu-active" : ""
              }
            >
              <div className="item-content">
                <img
                  className="settings-menu-icon"
                  src={item.icon}
                  alt={item.text}
                />
                <span className="settings-menu-text">{item.text}</span>
              </div>
              <span className="settings-menu-description">
                {item.description}
              </span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SettingsSideBar;
