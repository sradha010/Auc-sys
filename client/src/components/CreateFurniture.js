import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Slide, ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';


const CreateFurniture = (props) => {

  const navigate = useNavigate();
  const [furniture, setFurniture] = useState({
    Product: '',
    Price: '',
    Color: '',
    Material: '',
    Brand: '',
    Description: ''
  });
  const [showToast, setShowToast] = useState(false);
  const onChange = (e) => {
    setBook({ ...furniture, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    //Prevents the page form refreshing
    e.preventDefault();

    //API calls with the help of axios
    axios.post("api/furnitures", furniture).then((res) => {
      setFurniture({
        Product: "",
        Color: "",
        Material: "",
        Brand: "",
        Description: ""
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
        navigate('/'); // Navigate to homepage
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
                  name='Product'
                  className='form-control'
                  value={furniture.Product}
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='text'
                  placeholder=' COLOR NAME'
                  name='Color'
                  className='form-control'
                  value={furniture.Color}
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='text'
                  placeholder=' ENTER MATERIAL TYPE'
                  name='Material'
                  className='form-control'
                  value={furniture.Material}
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='text'
                  placeholder=' ENTER BRAND NAME'
                  name='Brand'
                  className='form-control'
                  value={furniture.Brand}
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='text'
                  placeholder=' ENTER DESCRIPTION'
                  name='Description'
                  className='form-control'
                  value={furniture.Description}
                  onChange={onChange}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );

};

export default CreateFurniture;