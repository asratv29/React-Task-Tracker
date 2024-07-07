import React from "react";
import PropTypes from "prop-types";
import Button from "./button";

const Header = ({ title, onAdd, showAddTask }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAddTask ? "limegreen" : "red"}
        text={showAddTask ? "Add" : "Cancel"}
        onClick={onAdd}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Header;
