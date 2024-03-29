import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import SignUp from './Pages/SignUp'
import LogIn from './Pages/LogIn'
import Profile from './Pages/Profile';
import DashBoard from './Pages/DashBoard';
import Products from './Pages/Products';
import Header from './Components/Header';
import SingleProduct from './Pages/SingleProduct';
import ContactUs from './Pages/ContactUs';
import { useSelector } from 'react-redux';

function App() {

  const user = useSelector((state)=>state.user);
  const UserAuth = () => {
   
    if (user.isAuth) {
     return <Outlet />
    } else {
     return <LogIn />
    }
  }
  const NavBar = () => {
    return (
      <>
        <Header />
        <Outlet />
      </>
    )
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<NavBar />}>
            <Route path='/' element={<Home />} />
            <Route element={<UserAuth />}>
              <Route path='/cart' element={<Cart />} />
              <Route path='/products' element={<Products />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/dashboard' element={<DashBoard />} />
              <Route path='/product/:id' element={<SingleProduct />} />
            </Route>
            <Route path='/contactus' element={<ContactUs />} />
          </Route>
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<LogIn />} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
