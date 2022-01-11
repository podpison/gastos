import { HashRouter, Route } from 'react-router-dom';
import './app.scss';
import { Navigation } from './pages/commonComponents/navigation/Navigation';
import StyledEngineProvider from '@mui/material/StyledEngineProvider';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { DoOrderAndFAQ } from './pages/commonComponents/doOrderAndFAQ/DoOrderAndFAQ';
import { Footer } from './pages/commonComponents/footer/Footer';
import { MainPage } from './pages/mainPage/MainPage';
import { Switch } from 'react-router';
import { AboutUs } from './pages/aboutUs/AboutUs';
import { FoodPictures } from './pages/commonComponents/foodPictures/FoodPictures';
import { Blog } from './pages/blog/Blog';
import { BusinessLunches } from './pages/businessLunches/BusinessLunches';
import { GastroShop } from './pages/gastroShop/GastroShop';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <Provider store={store}>
        <HashRouter basename={process.env.PUBLIC_URL}>
          <Navigation />
          <main className='main'>
            <Switch>
              <Route exact path='/' component={MainPage} />
              <Route path='/foodPrograms' component={MainPage} />
              <Route path='/aboutUs' component={AboutUs} />
              <Route path='/blog' component={Blog} />
              <Route path='/buisnesLanch' component={BusinessLunches} />
              <Route path='/gastroShop' component={GastroShop} />
            </Switch>
            <Route path={['/foodPrograms', '/aboutUs', '/buisnesLanch', '/foodPictures']} component={FoodPictures} />
            <Route exact path='/' component={FoodPictures} />
            <Route exact path='/' component={DoOrderAndFAQ} />
            <Route path={['/foodPrograms', '/aboutUs', '/foodPictures']} component={DoOrderAndFAQ} />
          </main>
          <Footer />
        </HashRouter>
      </Provider>
    </StyledEngineProvider>
  );
}

export default App;
