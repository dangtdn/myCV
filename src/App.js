import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import Header from './Components/Header/Header';
import AboutMe from './pages/AboutMe/AboutMe';
import MySkills from './pages/MySkills/MySkills';
import Experience from './pages/Experience/Experience';
import Education from './pages/Education/Education';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
            <Header/>
            <Switch>
              <Route exact path="/" component={AboutMe}/>
              <Route exact path="/aboutme" component={AboutMe}/>
              <Route exact path="/myskills" component={MySkills}/>
              <Route exact path="/experience" component={Experience}/>
              <Route exact path="/education" component={Education}/>
            </Switch>
        </div>
    </BrowserRouter>
  );
}

export default App;
