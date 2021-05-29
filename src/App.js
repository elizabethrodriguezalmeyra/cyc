
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/Container/ItemListContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import  Carrito from './Components/Context/cartContext';
import Cart from './Components/Cart/Cart';
import CategoryContainer from './Components/Container/CategoryContainer';
import FormularioUser from './Components/FormularioUser/FormularioUser';
import Orden from './Components/Orden/Orden'
import imagen from './Fotos/Desayuno Mixto.jpeg';
import imagen1 from './Fotos/Desayuno 2.jpeg';
import imagen2 from './Fotos/Desayuno 3.jpeg';
import imagen3 from './Fotos/Torta 4.jpeg'
import imagen4 from './Fotos/Torta 2.jpeg'
import imagen5 from './Fotos/Torta 3.jpeg'
import imagen6 from './Fotos/Picada 3.jpeg'
import imagen7 from './Fotos/Picada 2.jpeg'
import imagen8 from './Fotos/Picada 4.jpeg' 

function App() {
  return (
    <Carrito>
     <BrowserRouter>
     
    <div className="App">
      <NavBar />
       <Switch>
          
          <Route exact path="/Carrito">
            <Cart/>
          </Route>  
         
          <Route exact path="/Checkout/">
            <FormularioUser/>
          </Route>    
          <Route path="/Item/:id">
            <ItemDetailContainer />
          </Route>
          <Route exact path="/Categoria/:id">
           <CategoryContainer />
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
