// import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import ProductList from './components/ProductList';
import Details from './components/Details';
import {
    Routes,
    Route
} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <h1 className='title'>Product Manager</h1>
            <Routes>
                <Route exact path='/' element={<>
                    <Form/>
                    <hr/>
                    <ProductList/></>}>
                </Route>
                <Route exact path='/api/product/:id' element={<Details/>}/>
            </Routes>

        </div>
    );
}

export default App;
