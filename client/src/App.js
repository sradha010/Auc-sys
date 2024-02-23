// import logo from './logo.svg';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';


import CreateFurniture from './components/CreateFurniture'
import ShowFurnitureList from './components/ShowFurnitureList'
import ShowFurnitureDetails from './components/ShowFurnitureDetails'
 import UpdateFurniture from './components/UpdateFurniture'
 import Home from './components/HomePage'
 import AllRoutes from './components/Routes'
 import Feature from './components/Feature'
 import Tech from './components/Technology'

function App () {
  return (
    <Router>
      <div>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/furniture-list' element={<ShowFurnitureList />} />
            <Route path='/create-furniture' element={<CreateFurniture />} />
            <Route path='/edit-furniture/:id' element={<UpdateFurniture />} />
            <Route path='/show-furniture/:id' element={<ShowFurnitureDetails />} />
            <Route path='/features' element={<Feature />} />
            <Route path='/routes' element={<AllRoutes />} />
            <Route path='/technology' element={<Tech />} />
         </Routes>
      </div>
    </Router>
  );
}

export default App;
