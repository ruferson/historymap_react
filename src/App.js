
import './App.css';
import Principal from './Pages/Principal';
import Escribir from './components/Escribir';
import { Route } from 'wouter';

function App() {
  return (
    <div className="App">
      <Route  
          component={Principal}
          path="/">
      </Route>

      <Route 
          component={Escribir}
          path="/escribir">
      </Route>
    </div>
  );
}

export default App;
