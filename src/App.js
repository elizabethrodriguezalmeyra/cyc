
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/Container/ItemListContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import  Carrito from './Components/Context/cartContext';
import Cart from './Components/Cart/Cart';



function App() {
  return (
    <Carrito>
     <BrowserRouter>
    <div className="App">
      <NavBar />
       <Switch>
          <Route path="/Carrito">
            <Cart/>
          </Route>    
          <Route path="/Item/:id">
            <ItemDetailContainer />
          </Route>
          <Route exact path="/Categoria/:id">
           <ItemListContainer />
          </Route>     
          <Route path="/Carrito">
            <Cart/>
          </Route>
          <Route exact patch="/">
            <ItemListContainer  />
          </Route>

       </Switch>
      <header className="App-header">
      </header>      
    </div>
    </BrowserRouter>
    </Carrito>
  )
}

export default App;
