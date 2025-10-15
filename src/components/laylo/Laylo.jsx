import React from 'react'
import "./Laylo.css"
import logo from "../../assets/SHOP.CO.png"
import { IoLogoTwitter } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import card from "../../assets/Mastercard.png"
import gpay from "../../assets/G Pay.png"
import paypal from "../../assets/Paypal.png"
import visa from "../../assets/Visa.png"
import apay from "../../assets/applepay.png"

const Laylo = () => {
  return (
    <div>
       <div className="black-div">
        <h2 className='black-title'>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>
        <div className="right-items">
          <input className='footer-input' placeholder='Enter your email addres' type="email" />
          <button className='footer-btn'>Subscribe to Newsletter</button>
        </div>
      </div>
      <div className="footer">
        <div className="footer-desc">
          <div className="first-lines">
            <img className='footer-logo' src={logo} alt="" />
            <p>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>

            <div className="icons-wrapper">
              <div className="tw-wr">
            <IoLogoTwitter className='twitter' />
              </div>
              <div className="face-wr">
            <FaFacebookF className='facebook' />
              </div>
              <div className="insta-wr">
            <FaInstagram className='instagram' />
              </div>
              <div className="git-wr">
            <FaGithub className='github' />
              </div>
            </div>
          </div>


          <div className="second-line">
            <p>COMPANY</p>
            <div className="help-p">
            <p>About</p>
            <p>Features</p>
            <p>Works</p>
            <p>Career</p>
            </div>
          </div>


          <div className="second-line">
            <p>HELP</p>
            <div className="help-p">
            <p>Customer Support</p>
            <p>Delivery Details</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            </div>
          </div>


          <div className="second-line">
            <p>FAQ</p>
            <div className="help-p">
            <p>Account</p>
            <p>Manage Deliveries</p>
            <p>Orders</p>
            <p>Payments</p>
            </div>
          </div>


          <div className="second-line">
            <p>Resources</p>
            <div className="help-p">
            <p>Free eBooks</p>
            <p>Development Tutorial</p>
            <p>How to - Blog</p>
            <p>Youtube Playlist</p>
            </div>
          </div>

        </div>

          <div className="bottom-line">

          </div>

          <div className="finish-wr">
            <p>Shop.co © 2000-2023, All Rights Reserved</p>

            <div className="finish-icon">

            <div className="card-wr">
              <img src={visa} alt="" />
            </div>
           
            <div className="card-wr">
              <img src={card} alt="" />
            </div>

            <div className="card-wr">
              <img src={paypal} alt="" />
            </div>

            <div className="card-wr">
              <img src={apay} alt="" />
            </div>

            <div className="card-wr">
              <img src={gpay} alt="" />
            </div>
            </div>
          </div>

      </div>
    </div>
  )
}

export default Laylo
