import React from 'react'
import "./Customers.css";
import { DATA } from '../../mock';

const Customers = () => {
  return (
    <div>
       <div className="page">
    
    <aside className="filters">
      <h3>Filters</h3>

      <div className="filter-group">
        <p className="filter-title">Category</p>
        <ul>
          <li>T-shirts</li>
          <li>Shorts</li>
          <li>Shirts</li>
          <li>Hoodie</li>
          <li>Jeans</li>
        </ul>
      </div>

      <hr />

      <div className="filter-group">
        <p className="filter-title">Price</p>
        <div className="range">
         
          <div className="price-values">
            <span>$50</span>
            <span>$200</span>
          </div>
        </div>
      </div>

      <hr />

      <div className="filter-group">
        <p className="filter-title">Colors</p>
        <div className="colors">
          <span className="color red"></span>
          <span className="color orange"></span>
          <span className="color yellow"></span>
          <span className="color green"></span>
          <span className="color blue"></span>
          <span className="color purple"></span>
          <span className="color black"></span>
          <span className="color white"></span>
        </div>
      </div>

      <hr />

      <div className="filter-group">
        <p className="filter-title">Size</p>
        <div className="sizes">
          <button>XXS</button>
          <button>XS</button>
          <button>S</button>
          <button>M</button>
          <button className="active">L</button>
          <button>XL</button>
          <button>XS</button>
          <button>S</button>
          <button>M</button>
          <button>XXL</button>
          <button>3XL</button>
          <button>4XL</button>
        </div>
      </div>

      <hr />

      <div className="filter-group">
        <p className="filter-title">Dress Style</p>
        <ul>
          <li className="active">Casual</li>
          <li>Formal</li>
          <li>Party</li>
          <li>Gym</li>
        </ul>
      </div>

      <button className="apply-btn">Apply Filter</button>
    </aside>

    <main className="products">
      <div className="header">
        <h2>Casual</h2>
        <p>
          Showing 1–10 of 100 Products &nbsp; | &nbsp; Sort by:{" "}
          <b>Most Popular</b>
        </p>
      </div>

      <div className="grid">
        {DATA.map((item) => (
          <div key={item.id} className="card">
            <img src={item.url} alt={item.title} />
            <h4>{item.title}</h4>
            <div className="rating">
            
              
              <span>⭐⭐⭐4.5/5</span>
            </div>
            <div className="price">
              <span>${item.price}</span>
              {item.oldPrice && <s>${item.oldPrice}</s>}
              {item.discount && (
                <span className="discount">{item.discount}</span>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button>Previous</button>
        <div className="numbers">
          <button className="active">1</button>
          <button>2</button>
          <button>3</button>
          <button>...</button>
          <button>10</button>
        </div>
        <button>Next</button>
      </div>
    </main>
  </div>
      
    </div>
  )
}

export default Customers
