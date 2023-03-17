import React from "react";
import Button from "@mui/material/Button";
import "./Footer.css";
import Logo from "../assets/images/cust.png";
import Logos from "../assets/images/newsletter.png";
import Logoe from "../assets/images/ticket.png";
const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-one">
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src="https://in.bmscdn.com/webin/common/icons/hut.svg"
              alt="alternate"
            />
            <p style={{ marginBottom: 0 }}>
              <strong>List your Show</strong>Get a show,event,activity or a
              great experience Patner with us & get listed on BookMyShow
            </p>
          </div>
          <div>
            <Button
              variant="contained"
              color="error"
              style={{ textTransform: "none" }}
              sx={{ mr: 2, ml: 2, pt: 1, pb: 1 }}
            >
              Contact today!
            </Button>
          </div>
        </div>

        
       <div className="icon-footer">
          <div className="footer-cont">
            <div className="footer-img">
              <img src={Logo} alt="no"></img>
            </div>
            <p>24/7 CUSTOMER CARE</p>
          </div>
          <div className="footer-cont">
            <div className="footer-img">
              <img src={Logoe} alt="no"></img>
            </div>
            <p>RESEND BOOKING CONFIRMATION</p>
          </div>
          <div className="footer-cont">
            <div className="footer-img">
              <img src={Logos} alt="no"></img>
            </div>
            <p>SUBSCRIBE TO THE NEWSLETTER</p>
          </div>
        </div>
        {/* <div className="footer-next">
          <div className="footer2-cont">
            <div className="footer-line"></div>
            <a href="#">
              {" "}
              <img src="https://in.bmscdn.com/webin/common/icons/logo.svg" alt="no"></img>{" "}
            </a>
            <div className="footer-line"></div>
          </div>
          <div className="social-links">
            <div className="link">
              <i className="lab la-facebook-f"></i>
            </div>
            <div className="link">
              <i className="bi bi-twitter"></i>
            </div>
            <div className="link">
              <i className="bi bi-instagram"></i>
            </div>
            <div className="link">
              <i className="bi bi-youtube"></i>
            </div>
            <div className="link">
              <i className="lab la-pinterest-p"></i>
            </div>
            <div className="link">
              <i className="lab la-linkedin-in"></i>
            </div>
          </div>
          <p>
            Copyright 2023 &#169; Bigtree Entertainment Pvt. Ltd. All Rights
            Reserved.
          </p>
          <p>
            The content and images used on this site are copyright protected and
            copyrights vests with the respective owners. The usage of the
            content and images on this website is intended to promote the works
            and no endorsement of the artist shall be implied. Unauthorized use
            is prohibited and punishable by law.
          </p>
        </div> */}
        <div className="footer3">
          <div className="footer3a">
            <div className="line"></div>
            <a href="#">
              {" "}
              <img src="https://in.bmscdn.com/webin/common/icons/logo.svg" alt="no"></img>{" "}
            </a>
            <div className="line"></div>
          </div>
          <div className="social_links">
            <div>
              <i className="lab la-facebook-f"></i>
            </div>
            <div>
              <i className="bi bi-twitter"></i>
            </div>
            <div>
              <i className="bi bi-instagram"></i>
            </div>
            <div>
              <i className="bi bi-youtube"></i>
            </div>
            <div>
              <i className="lab la-pinterest-p"></i>
            </div>
            <div>
              <i className="lab la-linkedin-in"></i>
            </div>
          </div>
          <p>
            Copyright 2023 &#169; Bigtree Entertainment Pvt. Ltd. All Rights
            Reserved.
          </p>
          <p>
            The content and images used on this site are copyright protected and
            copyrights vests with the respective owners. The usage of the
            content and images on this website is intended to promote the works
            and no endorsement of the artist shall be implied. Unauthorized use
            is prohibited and punishable by law.
          </p>
        </div>
        </div>
    </footer>
  );
};

export default Footer;
