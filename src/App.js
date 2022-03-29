
import './App.css';
import Ver from './Pages/Ver';
import Crear from './Pages/Crear';
import User from './Pages/User';
import { Route } from 'wouter';
import Session from './Pages/Session';

function App() {
  return (
    <div className="App">
      <Route  
          component={User}
          path="/">
      </Route>
      <Route  
          component={User}
          path="/dashboard">
      </Route>
      <Route  
          component={Session}
          path="/session">
      </Route>
      <Route  
          component={Ver}
          path="/ver">
      </Route>

      <Route  
          component={Crear}
          path="/crear">
      </Route>

    </div>
  );
}

export default App;
