import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../styles/navbar.css";
function index() {
  return (
    <div className="nav-outer">
      <div className="nav-child navchild1 ">
        <i className="fab fa-airbnb fa-4x"></i>{" "}
      </div>
      <div className="nav-child navchild2 item-center">
        <p>Place to stay</p>
      </div>
      <div className="nav-child navchild3 item-center">
        <p>Experiences</p>
      </div>
      <div className="nav-child navchild4 item-center">
        <p>Online experiences</p>
      </div>
      <div className="nav-child  item-center navchild5">
        <p>Become a host</p>
      </div>
      <div className="nav-child last-two navchild6">
        {" "}
        <p>
          {" "}
          <i class="far fa-globe fa-1x"></i>
        </p>
      </div>
      <div className="nav-child last-two navchild7">
        <p>
          {" "}
          <i class="far fa-user fa-1x"></i>
        </p>
      </div>
    </div>
  );
}

export default index;
