import React, { useEffect, useState } from "react";
import "./sidebar.css";
import { connect } from "react-redux";
import { fetchCategories } from "../../store";
import {  useNavigate } from "react-router-dom";

function Sidebar({ fetchCategories, categories }) {
  const [showSidebar, setShowSidebar] = useState(false);

  const history = useNavigate();

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div
      className={
        showSidebar
          ? "sidebar-container sidebar-open"
          : "sidebar-container sidebar-close"
      }
    >
      <div
        onClick={() => setShowSidebar((prev) => !prev)}
        className="hamburger-container"
      >
        <img
          className="hamburger-img"
          src={require("../../assets/hamburger.svg").default}
        />
      </div>

      {categories?.map((category, index) => {
        return (
          <div
            onClick={() => {
              history(`${category.id}`);
              setShowSidebar(false);
            }}
            key={category.id}
            className={
              showSidebar ? "sidebar-item sidebar-item-open" : "sidebar-item"
            }
          >
            {category.name}
          </div>
        );
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    categories: state.catsReducer.categories,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCategories: () => dispatch(fetchCategories()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
