import React from "react";
import "../../styles/navbar.css";
import Search from "../search";
function index() {
  return (
    <div className="banner_outer_outer">
      <Search />
      <div className="banner_outer">
        <img src="https://a0.muscache.com/im/pictures/ddc7f01f-3fb3-483c-87e6-701dad52c930.jpg?im_w=960"></img>
        <div className="heading_outer">
          <div className="banner_heading">
            <img
              src="https://a0.muscache.com/pictures/Storefronts/may2021_HP_clearLogo_en_l/original/9850ff2c-bd0b-4f37-9d33-84f10a566045.svg"
              style={{height: "60px", width: "140px"}}
            ></img>
            <p className="banner_text">
              Introducing 100+ upgrades across our entire service
            </p>
            <div className="i_am_out_of_variable_names">Learn what's new</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
