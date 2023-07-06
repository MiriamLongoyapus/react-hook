// import logo from './logo.svg';
// import './App.css';
// import Navbar from'./Navbar';
// import AddProducts from'./AddProducts';
// import Login from'./Login';
// import ProductDisplay from'./ProductDisplay';

// function App() {
//   return (
//     <div className="App">
//       <AddProducts/>
//       <Login/>
//       <Navbar/>
//       <ProductDisplay/>
//     </div>
//   );
// }

// export default App;

import Login from './Login';
import Navbar from './Navbar';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Products from './Products'
import ProductDisplayPage from './ProductDisplay';
import AddProductsForm from './AddProducts';
function App() {
  return (
    <div >
      <Navbar/>
<BrowserRouter>
<Routes>
  { <Route path='/Login' element ={<Login/>}></Route> }
  { <Route path='ProductDisplay' element={<ProductDisplayPage/>}/> }
  { <Route path='/product/:productId' element ={<ProductDisplayPage/>}/> }
  {<Route path='/products' element ={<Products/>}/> }
  { <Route path ='/AddProducts' element={<AddProductsForm/>}/> }
</Routes>
</BrowserRouter>
    </div>
  );
}
export default App;
