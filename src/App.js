import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import Header from './Components/Header/Header';
import AboutMe from './pages/AboutMe/AboutMe';
import MySkills from './pages/MySkills/MySkills';
import Experience from './pages/Experience/Experience';
import Education from './pages/Education/Education';
import { PageTemplate } from './templates/PageTemplate';
import Home from './pages/Home/Home';
import { HomeTemplate } from './templates/HomeTemplate';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
            <Switch>
              <HomeTemplate exact path="/" Component={Home}/>
              <PageTemplate exact path="/aboutme" Component={AboutMe}/>
              <PageTemplate exact path="/myskills" Component={MySkills}/>
              <PageTemplate exact path="/experience" Component={Experience}/>
              <PageTemplate exact path="/education" Component={Education}/>
            </Switch>
        </div>
    </BrowserRouter>
  );
}

export default App;
