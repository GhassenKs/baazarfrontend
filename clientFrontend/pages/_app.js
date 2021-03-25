import React, { useEffect, useState, useContext } from 'react';
import ThemeSettings from '../components/customizer/theme-settings';
import '../public/assets/scss/app.scss';
import { ToastContainer } from 'react-toastify';
import TapTop from '../components/common/widgets/Tap-Top';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import { MenuContextProvider } from '../helpers/menu/MenuContext';
import CartContextProvider from '../helpers/cart/CartContext';
import { WishlistContextProvider } from '../helpers/wishlist/WishlistContext';
import FilterProvider from '../helpers/filter/FilterProvider';
import SettingProvider from '../helpers/theme-setting/SettingProvider';
import { CompareContextProvider } from '../helpers/Compare/CompareContext';
import { CurrencyContextProvider } from '../helpers/Currency/CurrencyContext';
import {AuthProvider, AuthContext} from '../context/auth';
import Helmet from 'react-helmet';
import jwtDecode from 'jwt-decode';
import {
  BrowserRouter as Router,
  Switch,
  useLocation
} from "react-router-dom";

//-------------------------------------



//----------------------------------------

export default function MyApp({ Component, pageProps }) {

  const [isLoading, setIsLoading] = useState(true);
  const [url, setUrl] = useState();
  const initialState = {
    user: null
  };

  useEffect(() => {
    const path = window.location.pathname.split('/');
    const url = path[path.length - 1];
    setUrl(url);
    document.body.classList.add('dark');

    if (localStorage.getItem('jwtToken')) {
      const decodedToken = jwtDecode(localStorage.getItem('jwtToken'));
    
      if (decodedToken.exp * 1000 < Date.now()) {
        localStorage.removeItem('jwtToken');
      } else {
        initialState.user = decodedToken;
      }
    }
    console.log(initialState.user);

    setTimeout(function () {
      setIsLoading(false)
    }, 1000);

  }, []);

 
  

  

  
  return (
    <>
    
      {
        isLoading ?

          <div className="loader-wrapper" >
            {
              url === 'Christmas' ?
                <div id="preloader"></div>
                :
                <div className="loader"></div>
            }


          </div>
          :
          <>
            <MessengerCustomerChat
              pageId="2123438804574660"
              appId="406252930752412"
              htmlRef="https://connect.facebook.net/en_US/sdk.js"
            />
          <Helmet>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Bazaar.tn</title>
          </Helmet>
          <AuthProvider>
          <Router>
            <div>
            
              <SettingProvider>
                <CompareContextProvider>
                  <CurrencyContextProvider>
                    <CartContextProvider>
                      <WishlistContextProvider>
                        <MenuContextProvider>
                          <FilterProvider>
                            <Component {...pageProps} />
                          </FilterProvider>
                        </MenuContextProvider>
                      </WishlistContextProvider>
                    </CartContextProvider>
                  </CurrencyContextProvider>
                  <ThemeSettings />
                </CompareContextProvider>
              </SettingProvider>
              
              <ToastContainer />
              <TapTop />
            </div>
            </Router>
            </AuthProvider>
          </>
      }

    </>
  )
}
