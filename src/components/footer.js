import React from "react";
import FilterLink from "../containers/filter_link";
import { VisibilityFilters } from "../redux/actions";

const Footer = () => (
  <div className="footer">
    <span>Show: </span>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
  </div>
);

export default Footer;
