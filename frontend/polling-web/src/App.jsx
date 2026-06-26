import { BrowserRouter as Router, Routes, Route, Navigate, } from 'react-router-dom'
import Home from './pages/Dashboard/Home'
import LoginForm from './pages/Auth/LoginForm'
import SignUpForm from './pages/Auth/SignUpForm'
import CreatePoll from './pages/Dashboard/CreatePoll'
import './App.css'
import BookMarks from './pages/Dashboard/BookMarks'

function App() {
 
  return (
    <>
      <div>
         <Router>
          <Routes>
            <Route path="*" element={<Root />} />
            <Route path="/login"exact element={<LoginForm />} />
            <Route path="/signup" exact element={<SignUpForm />} />
            <Route path="/dashboard" exact element={<Home />} />
            <Route path="/create-poll" exact element={<CreatePoll />} />
            <Route path="/my-polls" exact element={<MyPolls />} />
            <Route path="/voted-polls" exact element={<VotedPolls />} />
            <Route path="/bookmarks" exact element={<BookMarks />} />
            
          </Routes>
         </Router>
      </div>
    </>
  )
}

export default App

//Define the Root component to handle the iniial redirect
const Root = () => {
// check if the token exists in local storage
  const isAuthenticated = localStorage.getItem('token');
  
  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  } else {
    return <Navigate to="/login" />;
  }
};