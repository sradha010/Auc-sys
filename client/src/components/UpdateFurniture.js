import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';
import Navbar from './Navbar';
import Footer from './Footer';

function UpdateFurniture(props) {
  const [furniture, setFurniture] = useState({
    product: "",
    color: "",
    material: "",
    brand: "",
    description: ""
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`/api/furnitures/${id}`)
      .then((res) => {
        setFurniture({
          product: res.data.product,
          color: res.data.color,
          material: res.data.material,
          brand:res.data.brand,
          description: res.data.description,
        });
      })
      .catch((err) => {
        console.log('Error from UpdateBookInfo GET request');
        console.log(err)
      });
  }, [id]);

  const onChange = (e) => {
    setFurniture({ ...furniture, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
        product: furniture.product,
        color: furniture.color,
        material: furniture.material,
        brand:furniture.brand,
        description: furniture.description,
    };

    axios
      .put(`/api/furnitures/${id}`, data)
      .then((res) => {
        navigate(`/show-furniture/${id}`);
      })
      .catch((err) => {
        console.log('Error in UpdateFurniture PUT request ->');
        console.log(err)
      });
  };

  return (
    <div className='UpdateFurniture'>
      <Navbar />
      
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show Furniture List
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Edit Furniture</h1>
            <p className='lead text-center'>Update Furniture's Info</p>
          </div>
        </div>

        <div className='col-md-8 m-auto'>
          <form noValidate onSubmit={onSubmit}>
            <div className='form-group'>
              <label htmlFor='product'>Product</label>
              <input
                type='text'
                placeholder='Name of the Furniture'
                name='product'
                className='form-control'
                value={furniture.product}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='color'>Color</label>
              <input
                type='text'
                placeholder='Color Name'
                name='color'
                className='form-control'
                value={furniture.color}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='material'>Material</label>
              <input
                type='text'
                placeholder='Material type'
                name='material'
                className='form-control'
                value={furniture.material}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='brand'>Brand</label>
              <textarea
                type='text'
                placeholder='Brand Name'
                name='brand'
                className='form-control'
                value={furniture.brand}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='description'>Description</label>
              <input
                type='text'
                placeholder='Description'
                name='description'
                className='form-control'
                value={furniture.description}
                onChange={onChange}
              />
            </div>
            
            <button
              type='submit'
              className='btn btn-outline-info btn-lg btn-block'
            >
              Update Furniture
            </button>
            <br /> <br />
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default UpdateFurniture;