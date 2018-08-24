import React from "react";

const Link = ({ active, children, onFilter }) => (
  <button
    className="btn filter"
    onClick={onFilter}
    disabled={active}
    style={{
      marginLeft: "4px"
    }}
  >
    {children}
  </button>
);

export default Link;
