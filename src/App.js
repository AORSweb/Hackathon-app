import './App.css';
import NavBar from './components/navbar';
import AppRoutes from '../src/routes/route'
// import HomePage from './pages/homePage';

function App() {
  return (
    <div className="App">

     
    <NavBar/> 
    <AppRoutes />
    {/* <HomePage/> */}
    </div>
  );
}

export default App;
