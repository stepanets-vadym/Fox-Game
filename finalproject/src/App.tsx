// React
import React from 'react';

// Components & elements
import { Sprite } from 'components/sprite/Sprite';
import AppHeader from 'components/appHeader/AppHeader';
import AppRouter from 'components/appRouter/AppRouter';
import Footer from 'components/footer/Footer';

// Context
import { AuthProvider } from 'providers/AuthProvider';
import { ShopingCartProvider } from 'context/shopingCartContext';

// Style
import './styles/index.scss';
import { GamesProvider } from 'providers/GamesProvider';

const App = () => {

  return (
    <div className='App'>
      {/* SVG from IconMoon */}
      <Sprite />
      {/* Authorization provider */}
      <AuthProvider>
        {/* Shopin provider */}
        <ShopingCartProvider>
          <GamesProvider>
            <div className='content'>
              {/* Header + functions */}
              <AppHeader />
              {/* All Pages */}
              <AppRouter />
              {/* Footer */}
              <Footer />
            </div>
          </GamesProvider>
        </ShopingCartProvider>
      </AuthProvider>
    </div>
  );
};

export default App;
