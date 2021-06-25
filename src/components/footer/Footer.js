import React from "react";
import "../../styles/footer.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function footer() {
  return (
    <div className="footer_outer">
      <div className="footer_inner">
        <div className="ft_in">
          <div className="footer_inner_mains">
            <div className="footer_in_items">
              <div className=" head items">
                <b>About</b>
              </div>
              <div className="items">How Airbnb works</div>
              <div className="items">Newsroom</div>
              <div className="items">Investors</div>
              <div className="items">Airbnb Plus</div>
              <div className="items">Airbnb Luxe</div>
              <div className="items">HotelTonight</div>
              <div className="items">Airbnb for Work</div>
              <div className="items">Made possible by Hosts</div>
              <div className="items">Careers</div>
              <div className="items">Founder's Letter</div>
            </div>
          </div>
          <div className="footer_inner_mains">
            <div className="footer_in_items">
              <div className=" head items">
                <b>COMMUNITY</b>
              </div>
              <div className="items">How Airbnb works</div>
              <div className="items">Newsroom</div>
              <div className="items">Investors</div>
              <div className="items">Airbnb Plus</div>
            </div>
          </div>
          <div className="footer_inner_mains">
            <div className="footer_in_items">
              <div className="items">
                <b>HOST</b>
              </div>
              <div className="items">How Airbnb works</div>
              <div className="items">Newsroom</div>
              <div className="items">Investors</div>
              <div className="items">Airbnb Plus</div>
              <div className="items">Airbnb Luxe</div>
              <div className="items">HotelTonight</div>
            </div>
          </div>
          <div className="footer_inner_mains">
            <div className="footer_in_items">
              <div className=" head items">
                <b>SUPPORT</b>
              </div>
              <div className="items">Our COVID-19 Response</div>
              <div className="items">Newsroom</div>
              <div className="items">Investors</div>
              <div className="items">Airbnb Plus</div>
              <div className="items">Airbnb Luxe</div>
              <div className="items">HotelTonight</div>
              <div className="items">Airbnb for Work</div>
            </div>
          </div>
          <div className="spanner">
            <div className="spanner_ele_l">
              <div className="spanner_ele_left">2021 Airbnb,Inc</div>
              <div className="spanner_ele_left">Privacy</div>
              <div className="spanner_ele_left">Term</div>
              <div className="spanner_ele_left">Sitemap</div>
              <div className="spanner_ele_left">Company details</div>
            </div>
            <div className="spanner_ele_r">
              <div className="spanner_ele_right">
                <u>
                  <i class="fas fa-globe"></i>
                  English(IN)
                </u>
              </div>
              <div style={{padding: "14px"}} className="spanner_ele_right">
                <u>INR</u>
              </div>
              <div className="spanner_ele_right">
                <i class=" ba fab fa-facebook-square fa-2x"></i>
                <i class=" ba fab fa-twitter-square fa-2x"></i>
                <i class=" ba fab fa-instagram-square fa-2x"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default footer;
