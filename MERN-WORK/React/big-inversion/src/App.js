import logo from "./logo.svg";
import "./App.css";
import PersonCard from "./components/PersonCard";

function App() {
    return (
        <div className="App">
            <PersonCard lname = {"Doe"} fname ={"Jane"} age = {45} hair = {"Black"}></PersonCard>
            <PersonCard lname = {"Smith"} fname ={"John"} age = {88} hair = {"Brown"}></PersonCard>
            <PersonCard lname = {"Fillmore"} fname ={"Millard"} age = {50} hair = {"Brown"}></PersonCard>
            <PersonCard lname = {"Smith"} fname ={"Maria"} age = {62} hair = {"Brown"}></PersonCard>
        </div>
    );
}

export default App;
