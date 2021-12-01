import './App.css';
import Cerrarsesion from './Componentes/AddCancion';
import ListarCanciones from './Componentes/ListarCanciones';
import Login from './Componentes/login';


function App() {

  <Cerrarsesion/>
  if(localStorage.key(0)===null){
      return(
        <Login/>
      )
  }else{
  return (   
<ListarCanciones/>
  );
}

}
export default App;
