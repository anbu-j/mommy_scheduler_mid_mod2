import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MommyScheduler from './components/MommyScheduler';
import MommyChallenges from './components/MommyChallenges';
import MommyActivities from './components/MommyActivities';
import MommyReview from './components/MommyReview';

function App() {
  return (
    <div className="App">
      
      <Router>
        <MommyScheduler />
        <Switch>
        <Route exact path='/'component={MommyScheduler} />
        <Route path='/MommyChallenges'component={MommyChallenges} />
        <Route path='/MommyActivities'component={MommyActivities} />
        <Route path='/MommyReview'component={MommyReview} />
        <Route path='/' render={()=>{return<div><h1>Please make a selection! </h1></div>}}/>
        </Switch>
         

     </Router> 
      
    </div>
  );
}

export default App;
