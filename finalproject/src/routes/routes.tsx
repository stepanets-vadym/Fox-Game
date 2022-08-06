import Authorization from 'pages/authorization/Authorization';
import Registration from 'pages/registration/Registration';
import AdminPage from 'pages/adminPage/AdminPage';
import CartPage from 'pages/cartPage/CartPage';
import GamePage from 'pages/gamePage/GamePage';
import Shop from 'pages/shop/Shop';
import Home from 'pages/home/Home';


import { ADMIN_ROUTE, AUTHORIZATION_ROUTE, CART_ROUTE, GAME_ROUTE, HOME_ROUTE, NEWS_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from 'utils/consts';
import News from 'pages/news/News';

// way to the page
export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Element: <AdminPage/>,
  },
  
];

export const publicRoutes = [
  {
    path: SHOP_ROUTE,
    Element: <Shop/>,
  },
  {
    path: AUTHORIZATION_ROUTE,
    Element: <Authorization/>,
  },
  {
    path: REGISTRATION_ROUTE,
    Element: <Registration/>,
  },
  {
    path: GAME_ROUTE + '/:id',
    Element: <GamePage/>,
  },
  {
    path: HOME_ROUTE,
    Element: <Home/>,
  },
  {
    path: NEWS_ROUTE,
    Element: <News/>,
  },
  {
    path: CART_ROUTE,
    Element: <CartPage/>,
  },
];
