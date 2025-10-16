import "./Omina.css"
import image from '../../assets/shop.co1.png'
import logo from "../../assets/SHOP.CO3.png"
import { FaSearch } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { FaRegUserCircle } from "react-icons/fa";


const Omina = () => {
  return (
    <div className='container'>
      <div className="first-line">
      <p>Sign up and get 20% off to your first order. Sign Up Now</p>
      </div>
      <div className="navbar">
        <img src={logo} alt="" />
        <div className="links-wr">
        <p>Shop </p>
        <p>On Sale</p>
        <p>New Arrivals</p>
        <p>Brands</p>
        </div>
        <div className="input-wrap">
        <button><FaSearch /></button>
        <input placeholder='Search for products...' type="text" />
        </div>
        <div className="icons-wr">
        <SlBasket />
        <FaRegUserCircle />
        </div>
      </div>
      <div style={{backgroundColor:"#F2F0F1", display:"flex", justifyContent:"space-between", flexWrap:"wrap",alignItems:"center"}}>
  <div className='left-wr'>
    <h2 className='site-title'>FIND  CLOTHES  THAT  MATCHES  YOUR  STYLE</h2>
    <p className='banner-desc'>Browse through our diverse range of meticulously crafted garments, designed to biring out your individuality and cater to your sense of style. </p>
    <button className='banner-btn'>Shop Now</button>
    <div className='numbers-wr'>
      <div className='first-num'>
        <h3 className='num'>200+</h3>
        <p style={{color:"#00000099", fontSize:"25px",width:"256px"}}>International Brands</p>
      </div>

      <div className='first-num'>
        <h3 className='num'>2,000+</h3>
        <p style={{color:"#00000099",fontSize:"25px",width:"256px"}}>High-Quality Products</p>
      </div>


      <div className='first-num'>
        <h3 className='num'>30,000+</h3>
        <p style={{color:"#00000099", fontSize:"25px", width:"256px"}}>Happy Customers</p>
      </div>
    
    </div>
    </div>

<div className='right-wr'>
  <img className='site-img' src={image} alt="" />
</div>
</div>

<div className='bottom-wr'>
  <h3>VERSACE</h3>
  <h3>ZARA</h3>
  <h3>GUCCI</h3>
  <h3>PRADA</h3>
  <h3>CALVIN KLEIN</h3>

    </div>

    </div>
  )
}


export default Omina
