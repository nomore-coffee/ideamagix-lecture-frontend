import './App.css';
import { BrowserRouter , Routes ,Route } from 'react-router-dom';
import Login from './pages/loginpage/loginpage';
import Register from './pages/registerpage/registerpage';
import Admin from './pages/adminpage/admin';
import Addcourse from './pages/addcourse/addcourse';
import ProtectedAdmin from './ProtectedAdmin';
import Instructor from './pages/instructorpage/Instructor';
import ProtectedInstructor from './ProctedIntructo';
function App() {
  return (
<BrowserRouter>
<Routes>
  <Route>
  <Route path="/" element={<Login/>} exact />
  <Route path="/register" element={<Register/>} exact />
  <Route path="/admin" element={<ProtectedAdmin Component={Admin}/>} exact />
  <Route path="/addcourse" element={<ProtectedAdmin Component={Addcourse}/>} exact />
  <Route path="/instructor" element={<ProtectedInstructor Component={Instructor}/>} exact />
  </Route>
</Routes>
</BrowserRouter>    
  );
}

export default App;
