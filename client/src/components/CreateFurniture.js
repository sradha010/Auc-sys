import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';


const CreateFurniture = (props) => {

  const navigate = useNavigate();
  const [furniture, setFurniture] = useState({
    product: '',
    color: '',
    material: '',
    brand: '',
    description: '',
    price: '',
  });
  const [ShowToast, setShowToast] = useState(false);
  const onChange = (e) => {
    setFurniture({ ...furniture, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    //Prevents the page form refreshing
    e.preventDefault();

    //API calls with the help of axios
    axios.post("api/furnitures", furniture).then((res) => {
      setFurniture({
        product: "",
        color: "",
        material: "",
        brand: "",
        description: "",
        price:""
      })

      //Show the success alert
      toast.success('Furniture added successfully!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Slide,
      });

      // Delay the navigation slightly to allow the toast to be seen
      setTimeout(() => {
        setShowToast(false); // Hide the toast
        navigate('/furniture-list'); // Navigate to homepage
      }, 5000); // Adjust the timeout as needed

    })
      .catch((err) => {
        console.log('Error in CreateBook!');
        console.log('The error is -> ')
        console.log(err)
        // Show the success alert
        toast.error('Something went wrong, try again!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Slide,
        });
      });
  }


  return (
    <div className='CreateFurniture'>
      <Navbar />
      <br></br>
      <br></br>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick={true}
        pauseOnHover={true}
        draggable={true} np
        progress={undefined}
        theme="dark"
        transition={Slide}
      />
      <div className='container'>
        <div className='row'>

          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/furniture-list' className='btn btn-outline-dark float-left'>
              Furniture List
            </Link>
          </div>

          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Add Furniture</h1>
            <p className='lead text-center'>Create new Furniture</p>
            <form noValidate onSubmit={onSubmit}>

              <div className='form-group'>
                <input
                  type='text'
                  placeholder=' ENTER FURNITURE NAME'
                  name='product'
                  className='form-control'
                  value={furniture.product}
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='text'
                  placeholder=' COLOR NAME'
                  name='color'
                  className='form-control'
                  value={furniture.color}
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='text'
                  placeholder=' ENTER MATERIAL TYPE'
                  name='material'
                  className='form-control'
                  value={furniture.material}
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='text'
                  placeholder=' ENTER BRAND NAME'
                  name='brand'
                  className='form-control'
                  value={furniture.brand}
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='text'
                  placeholder=' ENTER DESCRIPTION'
                  name='description'
                  className='form-control'
                  value={furniture.description}
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='text'
                  placeholder=' ENTER PRICE'
                  name='price'
                  className='form-control'
                  value={furniture.price}
                  onChange={onChange}
                />
              </div>

              <input
                type='submit'
                className='btn btn-outline-dark btn-block mt-4 justify-content-center'
              />
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );

};

export default CreateFurniture;