// import logo from './logo.svg';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';


import CreateFurniture from './components/CreateFurniture'
import ShowFurnitureList from './components/ShowFurnitureList'
import ShowFurnitureDetails from './components/ShowFurnitureDetails'
import UpadteFurnitureInfo from './components/UpdateFurnitueInfo'

const App = () =>{
  return (
    <Router>
      <div>
          <Routes>
            <Route exact path='/' elements={<ShowFurnitureList />} />
            <Route path='/create-furniture' elements={<CreateFurniture />} />
            <Route path='/ edit-furniture' elements={<ShowFurnitureList />} />
            <Route path='/show-furniture/:id' elements={<ShowFurnitureDetails />} />
         </Routes>
      </div>
    </Router>
  );
}

export default App;
