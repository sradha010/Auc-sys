import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const FurnitureCard = (props) => {
  const furniture = props.furniture



  return (
    <div className='card-container'>
      <img
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxJO8QPP2i7Y4LM6YR0zhauSi58K5SyXhKkg&usqp=CAU'
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
