
import "./App.css";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Feedback from "./components/feedback";
import Feed from "./components/allfeed";
import ListShop from "./components/listShop";
import Displayshop from "./components/displayShop";
function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/feedback' element={<Feedback/>}></Route>
        <Route path='/feed' element={<Feed/>}></Route>
        <Route path='/listshop' element={<ListShop/>}></Route>
        <Route path='/displayshop' element={<Displayshop/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
