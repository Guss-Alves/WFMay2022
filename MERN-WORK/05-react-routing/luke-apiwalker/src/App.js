import './App.css';
import Form from './components/Form';
import {
    Routes,
    Route,
    Link
} from "react-router-dom";
import Data from './components/Data';

function App() {

    return (
        <div className="App">
            <Form></Form>
            <Routes>
                <Route path="/:category/:id" element={<Data/>} />
            </Routes>
        </div>
    );
}

export default App;
