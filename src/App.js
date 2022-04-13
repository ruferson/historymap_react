
import './App.css';
import Ver from './Pages/Ver';
import Crear from './Pages/Crear';
import User from './Pages/User';
import { Route } from 'wouter';
import Session from './Pages/Session';
import Inicio from './Pages/Inicio';
import Menu from './components/Menu';
import {  useState } from 'react';
import Cabezera from './components/Cabezera';


function App() {

  const [isActive, setActive] = useState(true)

  return (
    <div className="fondo">
      <Menu isActive={isActive}/>
      
      <div className={"page-content "+isActive} id="content">
        <Cabezera isActive={isActive} setActive={setActive}/>
        <div className="pl-4 pr-4 pt-3">
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
      </div>
    </div>
  );
}

export default App;
