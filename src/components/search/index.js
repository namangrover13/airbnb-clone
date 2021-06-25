import React from "react";
import "../../styles/Search.css";

function index() {
  return (
    <div className="outer">
      <div className="major_outer">
        <div className="search_outer">
          <div className="search_inner child1">
            <div className="div_temp">
              <div className="search_inner_text">Location</div>
              <div className="search_inner_input">
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="banner_input"
                ></input>
              </div>
            </div>
          </div>
          <div className="search_inner child2">
            <div className="div_temp">
              <div className="search_inner_text">Check in</div>
              <div className="search_inner_input">
                <input
                  className="banner_input"
                  type="text"
                  placeholder="Add Dates"
                ></input>
              </div>
            </div>
          </div>
          <div className="search_inner child3">
            <div className="div_temp">
              <div className="search_inner_text">Check out </div>
              <div className="search_inner_input">
                <input
                  className="banner_input"
                  type="text"
                  placeholder="Add Dates"
                ></input>
              </div>
            </div>
          </div>
          <div className="search_inner child4">
            <div className="search_inner_text">Guests</div>
            <div className="search_icon">
              <i class="fas fa-search fa-lg"></i>
            </div>
            <div className="search_inner_input">
              <input
                type="text"
                className="banner_input"
                placeholder="Add guests"
              ></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
