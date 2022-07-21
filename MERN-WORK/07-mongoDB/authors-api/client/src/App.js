import './App.css';
import AuthorsList from './components/AuthorsList';
import Update from './components/Update';
import Form from './components/Form';
import {
    Routes,
    Route
} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <h1 className='mt-3 ms-3'>Favorite authors</h1>
            <Routes>
                <Route exact path='/' element={<AuthorsList/>}/>
                <Route exact path='/api/author/new' element={<Form/>}/>
                <Route exact path='/api/author/edit/:id' element={<Update/>}/>
            </Routes>
        </div>
    );
}

export default App;
