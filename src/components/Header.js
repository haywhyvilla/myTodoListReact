import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

// CSS in Js
// const headingStyle = {
//   color: "red",
//   backgroundColor: "black",
// };

export default Header;
