import logo from './logo.svg';
import './App.css';
import Button from "@mui/material/Button"
/* import AccessibleForwardIcon from '@mui/icons-material/AccessibleForward';
import Typography from '@mui/material/Typography'  */
import {makeStyles} from "@mui/styles"

const useStyle = makeStyles({
  botonPersonalizado: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
})


function App() {

  const clases = useStyle()
  return (
    <div className="App">
      
    {/* <Button color="secondary" variant="contained" endIcon={<AccessibleForwardIcon />} >Este es un boton</Button>
    <p>Parrafo que separa</p>
    <Button color="primary" variant="outlined" size="large" edge="end">Este es un boton</Button>

    <AccessibleForwardIcon></AccessibleForwardIcon>
    <p>Sigo con pruebas</p>

    <Typography variant="h1" color="primary">A ver la top</Typography> */}

    <Button className= {clases.botonPersonalizado}>
      Mi boton personalizado
    </Button>
    </div>
  );
}

export default App;
