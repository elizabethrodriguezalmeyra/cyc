
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/Container/ItemListContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar/>
       <Switch>    
          
          <Route path="/Tortas/Item/:id">
            <ItemDetailContainer />
          </Route>
          <Route exact path="/Picadas/Item/:id">
          <ItemDetailContainer />
          </Route>
          <Route path="/Desayuno/Item/:id">
            <ItemDetailContainer />
          </Route> 
          <Route path="/Torta/Item/:id">
            <ItemDetailContainer />
          </Route>       
      
          <Route exact patch="/">
            <ItemListContainer />
          </Route>
       </Switch>
      <header className="App-header">
      </header>
          
      
      
    </div>
    </BrowserRouter>
  );
}

export default App;
