import { useState } from 'react'
import About from './components/About'
import Contactus from './components/Contactus'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <div className="heading"> Heading </div>
      <div className="contents">
        <Sidebar />
        <Routes>
          <Route path="/" element={<About />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/contactus" element={<Contact Us />}/>
        </Routes>
      </div>
    </Router>
    <div class="container">
      <div class="heading">
        <h1 class="h">My Time Table</h1>
      </div>
      <div class="Main">
        <ul class="sidebar">
          <li>About Us</li>
          <li>Register</li>
          <li>Login</li>
          <li>Profile</li>
          <li>Contact us</li>
        </ul>
            <table border={1}>
        <tr>
            <th>Oday</th>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
            <th>6</th>
            <th>7</th>
        </tr>
        <tr>
          <td>Mon</td>
          <td colSpan={7}><strong>Holiday</strong></td>
        </tr>
        <tr>
          <td>Tue</td>
          <td>-</td>
          <td>-</td>
          <td>24MT2012-L-S-206-RoomNo-C423</td>
          <td>24MT2012-L-S-206-RoomNo-C423</td>
          <td>24CS2101R-P-S-207-RoomNo-R107A</td>
          <td>24CS2101R-P-S-207-RoomNo-R107A</td>
          <td>24AD2001A-T-S-206-RoomNo-R107A</td>
        </tr>
        <tr>
          <td>Wed</td>
          <td>-</td>
          <td>-</td>
          <td>24AD2001A-P-S-206-RoomNo-R405A</td>
          <td>24AD2001A-P-S-206-RoomNo-R405A</td>
          <td>24SDCS01E-T-S-202-RoomNo-L306</td>
          <td>24SDCS01E-T-S-202-RoomNo-L306</td>
          <td>24CS2203-L-S-204-RoomNo-R201A</td>
        </tr>
        <tr>
          <td>Thu</td>
          <td>24AD2001A-L - S-206 -RoomNo-C406</td>
          <td>24AD2001A-L - S-206 -RoomNo-C406</td>
          <td>24SDCS01E-S - S-202 -RoomNo-R209B</td>
          <td>24SDCS01E-S - S-202 -RoomNo-R209B</td>
          <td>24MT2012-T - S-206 -RoomNo-C410</td>
          <td>24MT2012-T - S-206 -RoomNo-C410</td>
          <td>24CS2202-L - S-217 -RoomNo-M203</td>
        </tr>
        <tr>
          <td>Fri</td>
          <td>-</td>
          <td>-</td>
          <td>24AD2001A-L - S-206 -RoomNo-C221B1</td>
          <td>24AD2001A-L - S-206 -RoomNo-C221B1</td>
          <td>24CS2203-S - S-204 -RoomNo-SK009</td>
          <td>24CS2203-S - S-204 -RoomNo-SK009</td>
          <td>24AD01HF-L - S-205 -RoomNo-C423</td>
        </tr>
        <tr>
          <td>Sat</td>
          <td>-</td>
          <td>-</td>
          <td>24CS2101R-L - S-207 -RoomNo-M203</td>
          <td>24CS2101R-L - S-207 -RoomNo-M203</td>
          <td>24CS2202-P - S-217 -RoomNo-C017</td>
          <td>24CS2202-P - S-217 -RoomNo-C017</td>
          <td>24CS2101R-L - S-207 -RoomNo-C407</td>
        </tr>
    </table>
      </div>
      <div class="footer">Footer</div>
    </div>
    
    </>
  )
}

export default App
