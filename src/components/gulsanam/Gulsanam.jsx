import { Link } from "react-router-dom";
import { products } from "../../mock/Index";
import { IoIosStar } from "react-icons/io";
import "./Gulsaanm.css"

import React from 'react'

const Gulsanam = () => {
  return (
    <div>


    <div className="product">
      <div className="product-wrap">
        {products.map((item, index) => {
          return (
            <div key={index} className="product-card">
              <Link to={`/product/${item.id}`}>
                <img src={item.img} alt="" />
              </Link>
              <h2>{item.title}</h2>
              <div>

              <IoIosStar className="yulduz"/>
              <IoIosStar className="yulduz"/>
              <IoIosStar className="yulduz"/>
              </div>
              <b className="price">{item.price}</b>
            </div>
          );
        })}
      </div>
    </div>
  

    </div>
  )
}

export default Gulsanam
