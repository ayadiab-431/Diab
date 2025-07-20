import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home.jsx';
import ProductsPage from './Pages/ProductsPage/ProductsPage.jsx';
function App() {
  return (
    <div className="App rtl" dir="rtl">
      <Router basename="/Diab">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/products' element={<ProductsPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
