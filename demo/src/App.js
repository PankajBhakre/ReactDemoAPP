import './App.css';
import State from './Components/Header/Header.js';
// import User from './Components/Parent-child/User.js';
// import Parent from './Components/Child to Parent/Parent';
// import UserProfile from './Components/UserProfile/UserProfile';
// import AxiosUser from './Components/Axios/AxiosUser';
import Home from './Components/ChatApp/Home';
import ProfileState from './Components/State/ProfileState';
import Gender from './Components/Gender/Gender';
import AsyncAwait from './Components/Axios/AsyncAwait';
import Nav from './Components/Nav/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageNotFound from './Components/PageNotFound/PageNotFound';

function App() {
  return (
    <div className="App">
<BrowserRouter>
<Nav/>
<Routes>
<Route path="/" element={<State/>} />
  <Route path="/home" element={<AsyncAwait/>} />
  <Route path="/chatapp" element={<Home/>} />
  <Route path="/profile" element={<ProfileState/>} />
  <Route path="/gender" element={<Gender/>} />
  <Route path="*" element={<PageNotFound />} />
</Routes>
</BrowserRouter>
    
     {/* <State /> */}
     {/* <ProfileState/> */}
    {/* <User/> */}
    {/* <Parent/> */}
    {/* <Home/> */}
    {/* <UserProfile/> */}
    {/* <Gender/> */}
    {/* <AxiosUser/> */}
    {/* <AsyncAwait/> */}
    </div>
  );
}

export default App;
