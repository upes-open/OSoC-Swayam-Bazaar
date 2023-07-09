
import "./App.css";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Feedback from "./components/feedback";
import Feed from "./components/allfeed";
function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/feedback' element={<Feedback/>}></Route>
        <Route path='/feed' element={<Feed/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
