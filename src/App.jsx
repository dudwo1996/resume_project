// eslint-disable-next-line no-unused-vars
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Signin from './Sign/Signin';
import Signup from './Sign/Signup';
import Intro from './Sign/Intro';
import Home from './Home/Home';
import WriteResume from './Resume/WriteReusme';

function App() {
    return (
        <>
            <div className="App">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Signin />} />
                        <Route path="/signin" element={<Signin />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/intro" element={<Intro />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/writeresume" element={<WriteResume />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    );
}

export default App;
