//import React, { useState, useEffect } from 'react';
//import { Link, useParams, useNavigate } from 'react-router-dom';
//import '../App.css';
//import axios from 'axios';

function ShowFurnitureDetails(props) {
  const [book, setBook] = useState({});

  const { id } = useParams();
 
  return (
    <div className='ShowBookDetails'>
      <div className='container'>
        <div className='row'>
          <h1>showing all the funrniture list</h1>
        </div>
      </div>
    </div>
  );
}

export default ShowFurnitureDetails;