import { Link } from "react-router-dom";
import "./HeaderApp.css";

const HeaderApp = () => {
  return (
    <Link className="titleApp" to="/">
      <h1>Admin Time App</h1>
    </Link>
  );
};

export default HeaderApp;
