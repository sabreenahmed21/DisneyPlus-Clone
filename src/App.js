import { Routes,  Route} from 'react-router-dom';
import Login from './Components/Login';
import Header from './Components/Header';
import Home from './Components/Home';
import Details from './Components/Details';

function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
            <Route path='/' element={ <Login />}/>
            <Route path='/home' element={<Home />}/>
            <Route path="/detail/:id" element={<Details />} />
        </Routes>
    </div>
  );
}

export default App;