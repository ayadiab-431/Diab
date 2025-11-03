import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './Pages/Home/Home.jsx';
import FurnituresPage from './Pages/FurnituresPage/FurnituresPage.jsx';
import SplashScreen from './Components/SplashScreen/SplashScreen.jsx';
import { ThemeProvider } from "@mui/material/styles";
import theme from './Styles/Theme.jsx';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop.jsx';
import ProductDetails from './Pages/ProductDetails/ProductDetails.jsx';
import MainLayout from './Layouts/MainLayout.jsx';
import AboutUsPage from './Pages/AboutUsPage/AboutUsPage.jsx';
import HowToOrderPage from './Pages/HowToOrderPage/HowToOrderPage.jsx';
import ContactUSPage from './Pages/ContactUSPage/ContactUSPage.jsx';
import LoginPage from './Pages/LoginPage/LoginPage.jsx';
import AdminDashboard from './Pages/Admin/AdminDashboard.jsx';
import ErrorPage from './Pages/Error/ErrorPage.jsx';
import ForgotPasswordPage from './Pages/ForgotPasswordPage/ForgotPasswordPage.jsx';
import VerifyOTPPage from './Pages/VerifyOTPPage/VerifyOTPPage.jsx';
function App() {

  // Loading State
  const [isAppLoading, setIsAppLoading] = useState(true);

  useEffect(() => {
    const timout = setTimeout(() => {
      setIsAppLoading(false);
    }, 2000);

    return () => clearTimeout(timout);
  }, []);

  if (isAppLoading){
    return(
      <SplashScreen/>
    );
  }
  return (
    <ThemeProvider theme={theme}>
        <div className="App rtl" dir="rtl">
          <Router basename="/Diab">
          <ScrollToTop/>
            <Routes>

              <Route path='/' element={<MainLayout/>}>
                <Route index element={<Home/>}/>
                <Route path='/products' element={<FurnituresPage/>}/>
                <Route path='/product/:productId' element={<ProductDetails/>}/>
                <Route path='/aboutus' element={<AboutUsPage/>}/>
                <Route path='/howtoorder' element={<HowToOrderPage/>}/>
                <Route path='/contactus' element={<ContactUSPage/>}/>
              </Route>
              <Route path='/admin/login' element={<LoginPage/>}/>
              <Route path='/admin/dashboard' element={<AdminDashboard/>}/>
              <Route path='*' element={<ErrorPage />}/>
              <Route path='/forgot-password' element={<ForgotPasswordPage />} />
              <Route path='/verify-otp' element={<VerifyOTPPage />} />
            </Routes>
          </Router>
        </div>
    </ThemeProvider>
  );
}

export default App;
