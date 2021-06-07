import React from 'react';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './Home';
import Present from './Present';
import './App.css'

class App extends React.Component {
render(){
return(
<Router >
<div>
<Route exact path="/" component={Home} />
<Route path="/Present" component={Present} />
</div>
</Router>
)
}
}
export default App;