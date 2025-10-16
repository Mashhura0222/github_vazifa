import React from 'react'
import gym from "../../assets/gym.png"
import party from "../../assets/party.png"
import formal from "../../assets/formal.png"
import casual from "../../assets/casual.png"
import "./Mashhura.css"
const Mashhura = () => {
  return (
    <div className='browse'>
      <div className='dress_div'>
        <h2 className='dress_h1'>BROWSE BY dress STYLE</h2>
        <div className='browse_div'>
          <div className='casual_box'>
            <p className='casual_p'>Casual</p>
            <img className='casual_img' src={casual} alt="casual" />
          </div>
           <div className='formal_box'>
            <p className='formal_p'>Formal</p>
            <img className='formal_img' src={formal} alt="formal" />
          </div>
           <div className='party_box'>
            <p className='party_p'>Party</p>
            <img className='party_img' src={party} alt="party" />
          </div>
           <div className='gym_box'>
            <p className='gym_p'>Gym</p>
            <img className='gym_img' src={gym} alt="party" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mashhura
