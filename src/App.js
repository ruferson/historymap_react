
import './App.css';
import Ver from './Pages/Ver';
import Crear from './Pages/Crear';
import User from './Pages/User';
import Login from './Pages/Login';
import { Route } from 'wouter';
import Singup from './Pages/Singup';

function App() {
  return (
    <div className="App">
      <Route  
          component={User}
          path="/">
      </Route>
      <Route  
          component={Login}
          path="/login">
      </Route>
      <Route  
          component={Singup}
          path="/singup">
      </Route>
      <Route  
          component={Ver}
          path="/Ver">
      </Route>

      <Route  
          component={Crear}
          path="/Escribir">
      </Route>

    </div>
  );
}

export default App;
