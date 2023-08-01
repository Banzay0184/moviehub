import './reset.css'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/home/Home";
import Catalog from "./components/catalog/Catalog";
import Save from "./components/save/Save";
import MovieDescr from "./components/moviedescr/MovieDescr";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/Catalog' element={<Catalog/>}/>
                    <Route path='/Save' element={<Save/>}/>
                    <Route path='/moviedescr/:id' element={<MovieDescr/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
