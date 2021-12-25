import {  BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
 
import './App.css';
import LoginScreen from './Screens/LoginScreen';
import AdminScreen from './Screens/AdminScreen';
import VendorScreen from './Screens/VendorScreen';
import HomeScreen from './Screens/HomeScreen';
import AdminAddUserScreen from './Screens/AdminAddUserScreen';
import AdminViewUserScreen from './Screens/AdminViewUserScreen';
import AdminAcceptProductScreen from './Screens/AdminAcceptProductScreen';



function App() {
  return (
    <Router>
      <Routes>
      <Route path="/admin/acceptproduct" element={<AdminAcceptProductScreen/>}/>
      <Route path="/admin/viewuser" element={<AdminViewUserScreen/>}/>
        <Route path="/admin/adduser" element={<AdminAddUserScreen/>}/>
      <Route path="/vendor" element={<VendorScreen/>}/>
      <Route path="/admin" element={<AdminScreen/>}/>
        <Route path="/login" element={<LoginScreen/>}/>
        <Route path="/" element={<HomeScreen/>}/>
        
      </Routes>
    </Router>
  )
}

export default App;
