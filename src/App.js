
import './App.css';
import Ver from './Pages/Ver';
import Crear from './Pages/Crear';
import { Route } from 'wouter';

function App() {
  return (
    <div className="App">
      <Route  
          component={Ver}
          path="/">
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
