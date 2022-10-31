import React from 'react'
import '../assets/css/home.css'
import  picture from'../assets/images/alex.jpg'
function Home() {
  return (
    <div className='home'> 
      <div className="section-presentation">
        <div className="presentation">
          <div className="description">
          <svg viewBox="0 0 1320 300">
            <text x="50%" y="50%" dy=".35em" text-anchor="middle">
              Pascal d'Almeida
            </text>
          </svg>	
          </div>
            <div className='img'>
                  <img src={picture} alt="identity" title='presentation-picture' />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home