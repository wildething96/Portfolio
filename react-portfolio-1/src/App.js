import { Switch, Route } from 'react-router-dom'

import AboutMePage from './pages/AboutMe';
import ContactPage from './pages/Contact';
import LandingPage from './pages/Landing';
import PortfolioPage from './pages/Portfolio';

function App() {
  return (
    <Switch>
        <Route path="/" exact>
          <LandingPage />
        </Route>
        <Route path="/about_me">
          <AboutMePage />
        </Route>
        <Route path="/portfolio">
          <PortfolioPage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
      </Switch>
  );
}

export default App;
