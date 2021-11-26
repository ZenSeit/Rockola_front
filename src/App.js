import './App.css';
import ListarCanciones from './Componentes/ListarCanciones';
import Login from './Componentes/login';


function App() {


  if(localStorage.key(0)===null){
      return(
        <Login/>
      )
  }else{
  return (   
<ListarCanciones/>
  );
}}

export default App;
