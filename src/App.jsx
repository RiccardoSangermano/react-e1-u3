import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyAlert from '../Welcome';
import MyNav from '../MyNav';
import MyFooter from '../MyFooter';
import horror from '../horror.json'
import BookList from '../BookList';





function App() {
 return (
<>
<MyNav/>
<MyAlert/>
<BookList books={horror} />
<MyFooter/>
      
</>
 )
}

export default App
