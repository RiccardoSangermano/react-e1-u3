import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card } from "react-bootstrap";
import MyAlert from '../Welcome';
import AllTheBooks from '../AllTheBooks';
import MyNav from '../MyNav';




function App() {
 return (
<>
<div>
  <MyNav/>
</div>
<div>
<MyAlert/>
</div>
<div>
      <h1>Elenco dei libri horror</h1>
      <AllTheBooks />
    </div>
<Card>
<Card.Body>This is some text within a card body.</Card.Body>
</Card>
      
</>
 )
}

export default App
