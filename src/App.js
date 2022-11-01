import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {Navbar} from "./components/Navbar";
import {Alert} from "./components/Alert";

function App() {
    return (
        <Router>
            <Navbar />
            <div className="container pt-4">
                <Alert />
                <Routes>
                    <Route path={'/'} exact element={<Home/>}/>
                    <Route path={'/about'} element={<About/>}/>
                 </Routes>
            </div>
        </Router>
    );
}

export default App;
