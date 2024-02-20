import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import FurnitureCard from './FurnitureCard';
import Navbar from './Navbar';
import Footer from './Footer';

function ShowFurnitureList() {
  const [furnitures, setFurniture] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/furnitures`)
      .then((res) => {
        setFurniture(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowFurnitureList ->');
        console.log(err)
      });
  }, []);

  const furnitureList =
    furnitures.length === 0
      ? 'there is no furniture record!'
      : furnitures.map((furniture, k) => <FurnitureCard furniture={furniture} key={k} />);

  return (
    <div className='ShowFurnitureList'>
      <Navbar />
<br></br>
<br></br>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <br />
            <h2 className='display-4 text-center'>Furniture List</h2>
          </div>

          <div className='col-md-11'>
            <Link
              to='/create-furniture'
              className='btn btn-outline-dark float-right'
            >
              + Add New Furniture
            </Link>
            <br />
            <br />
            <hr />
          </div>
        </div>

        <div className='list'>{furnitureList}</div>
      </div>
      <br />

      <Footer />
    </div>
  );
}

export default ShowFurnitureList;