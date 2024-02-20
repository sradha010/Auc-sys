import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const FurnitureCard = (props) => {
  const furniture = props.furniture



  return (
    <div className='card-container'>
      <img
        src='https://img.freepik.com/free-photo/blue-armchair-against-blue-wall-living-room-interior-elegant-interior-design-with-copy-space-ai-generative_123827-23719.jpg'
        alt='Furnitures'
        height={200}
      />
      <div className='desc'>
        <h2>
          <Link to={ `/show-furniture/${furniture._id}` }>
            {furniture.product}  
          </Link> 
        </h2>
        <h3>{furniture.material}</h3>
        <p>{furniture.description}</p>
      </div>
    </div>  
  )
}

export default FurnitureCard
