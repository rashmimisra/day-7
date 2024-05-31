
import { Route, Routes } from 'react-router-dom';
// import './App.css';
import HomePage from './component/HomePage';
import MyCard2 from './component/MyCard2';

import NavBar from './component/NavBar';
import Errorpage from './component/Errorpage';
import About from './component/About';
import Product from './component/Product';
import Product1 from'./component/Product1';
import Product2 from './component/Product2';
import Product3 from './component/Product3';
import Student from './component/Student';
import Mydog from './component/Mydog';
import Usestate from './component2/Usestate';
import UseEffectex from './component2/UseEffectex';
import { UseReducer } from './component2/UseReducer';
import UseContext from './component2/UseContext';
import Login from './component/Login';
import Logeer from './component/Logeer';





function App() {
   return (
      <>
      <h1 className='container text-center'> HOME PAGE  </h1>
<hr>
</hr>     
     <Login/>
      {/* <NavBar/>
     
      <Routes>
         <Route path='/'element={<HomePage/>}/>
         <Route path='/MyCard2'element={<MyCard2/>}/>
         <Route path='/student'element={<Student/>}>
         <Route path='/student/:name'element={<Student/>}/>
         </Route>

         <Route path='/product'element={<Product/>}>
         <Route path='product1'element={<Product1/>}/>
         <Route path='product2'element={<Product2/>}/>
         <Route path='product3'element={<Product3/>}/>
         </Route>
         <Route path='/about' element={<About/>}/>
         <Route path='*' element={<Errorpage/>}/>
         

      </Routes> */}
      {/* <Mydog/> */}
     
   
      </>
      
   );
}
export default App
