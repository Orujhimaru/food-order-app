import { useParams } from "react-router-dom";
import "./SettingsPage.scss";
import ProductManagement from "../../components/SettingsCategory/ProductManagement";

function SettingsPage() {
  const { section } = useParams();
  const sectionComponents = {
    "product-management": <ProductManagement />,
    "your-restaurant": <YourRestaurant />,
  };

  sectionComponents[section];

  return <main className="settings-page"> {sectionComponents[section]} </main>;
}

export default SettingsPage;
