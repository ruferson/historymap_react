
import './App.css';
import Ver from './Pages/Ver';
import Crear from './Pages/Crear';
import User from './Pages/User';
import { Route } from 'wouter';
import Session from './Pages/Session';
import Inicio from './Pages/Inicio';

function App() {
  return (
    <div className="App">
      <Route  
          component={Inicio}
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
          path="/ver/:id">
      </Route>

      <Route  
          component={Crear}
          path="/crear">
      </Route>

    </div>
  );
}

export default App;
