import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

const CreateFurniture = (props) => {
  const onSubmit =(e) =>{
//Prevents the page form refreshing
e.preventDefault();

//API calls with the help of axios
// axios.post("api/furnitures",furniture).then((res) => {
//   setFurniture({ 
//     Product:"",
//     Price:"",
//     Color:"",
//     Material:"",
//     Brand:""
//   })
// })
  }
  return (
    <div className='CreateFurniture'>
      <div className='container'>
        <div className='row'>

        <div className='col-md-8 m-auto'>
            <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Furniture List
            </Link>
            </div>

            <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Add Furniture</h1>
            <p className='lead text-center'>Create new book</p>
            <form noValidate onSubmit={onSubmit}>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder=' ENTER FURNITURE NAME'
                  name='title'
                  className='form-control'
                 // value={Furniture.product}
                  //onChange={onChange}
                />
                </div>
                </form>
              </div>   
                     

        </div>
      </div>
    </div>
  );
};

export default CreateFurniture;