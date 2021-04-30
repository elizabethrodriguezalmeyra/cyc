
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/Container/ItemListContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar />
       <Switch>    
          
          <Route path="/Item/:id">
            <ItemDetailContainer />
          </Route>
          <Route exact path="/Categoria/:id">
           <ItemListContainer />
          </Route>     
      
          <Route exact patch="/">
            <ItemListContainer  />
          </Route>
       </Switch>
      <header className="App-header">
      </header>
          
      
      
    </div>
    </BrowserRouter>
  );
}

export default App;
