import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Update from './components/Update';
import {
    Routes,
    Route
} from "react-router-dom";

function App() {

    let [formsubmitted, setFormSubmitted] = useState(false);

    return (
        <div className="App">
            <h1 className='title'>Product Manager</h1>
            <Routes>
                <Route exact path='/' element={<>
                    <Form formsubmitted={formsubmitted} setFormSubmitted={setFormSubmitted} />
                    <hr/>
                    <ProductList formsubmitted={formsubmitted} /></>}>
                </Route>
                <Route exact path='/api/product/:id' element={<Details/>}/>
                <Route exact path='/api/product/edit/:id' element={<Update/>}/>
            </Routes>

        </div>
    );
}

export default App;
