import { useParams } from "react-router-dom";
import "./SettingsPage.scss";
import ProductManagement from "../../components/SettingsCategory/ProductManagement";
import HomePage from "../HomePage/HomePage";

function SettingsPage() {
  const { section } = useParams();

  const sectionComponents = {
    "product-management": <ProductManagement />,
    "your-restaurant": <div>YOUR RESTORANT</div>,
  };

  return <main className="settings-page">{sectionComponents[section]}</main>;
}

export default SettingsPage;
