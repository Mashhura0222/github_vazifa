import React from 'react'
import { FaCheckCircle, FaStar } from "react-icons/fa";
import "./Mubosher.css"

const products = [
  {
    id: 1,
    name: "Polo with Contrast Trims",
    price: 212,
    oldPrice: 242,
    discount: "-20%",
    rating: 4.0,
    image:
      "https://images.pexels.com/photos/6311581/pexels-photo-6311581.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    name: "Gradient Graphic T-shirt",
    price: 145,
    rating: 3.5,
    image:
      "https://images.pexels.com/photos/769732/pexels-photo-769732.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    name: "Polo with Tipping Details",
    price: 180,
    rating: 4.5,
    image:
      "https://images.pexels.com/photos/1661473/pexels-photo-1661473.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    name: "Black Striped T-shirt",
    price: 120,
    oldPrice: 160,
    discount: "-30%",
    rating: 5.0,
    image:
      "https://images.pexels.com/photos/769732/pexels-photo-769732.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const Mubosher = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    },
    {
      name: "Alex K.",
      text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    },
    {
      name: "James L.",
      text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    },
  ];
  return (
    <div>
        <section className="testimonials">
      <h2 className="testimonials-title">OUR HAPPY CUSTOMERS</h2>
      <div className="testimonials-container">
        {testimonials.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} color="#FFD700" />
              ))}
            </div>
            <h3 className="testimonial-name">
              {item.name} <FaCheckCircle className="verified-icon" />
            </h3>
            <p className="testimonial-text">{item.text}</p>
          </div>
        ))}
      </div>

     
    </section>

    <section className="recommended">
      <h2 className="recommended-title">YOU MIGHT ALSO LIKE</h2>

      <div className="product-list">
        {products.map((item) => (
          <div className="product-card" key={item.id}>
            <img src={item.image} alt={item.name} className="product-img" />
            <h3 className="product-name">{item.name}</h3>

            <div className="rating">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  color={i < Math.round(item.rating) ? "#FFD700" : "#ddd"}
                />
              ))}
              <span className="rating-text">{item.rating.toFixed(1)}/5</span>
            </div>

            <div className="price-section">
              <span className="price">${item.price}</span>
              {item.oldPrice && (
                <>
                  <span className="old-price">${item.oldPrice}</span>
                  <span className="discount">{item.discount}</span>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
  )
}

export default Mubosher
