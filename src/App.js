import "./App.css";
import Home from "./pages/home/Home";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Movie from "./pages/movie/Movie";
import TicketBooking from "./pages/ticketBooking/TicketBooking";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movie/:id" element={<Movie/>}/>
        <Route path="/bookTicket" element={<TicketBooking/>}/>
    </Routes>
    </BrowserRouter >
  );
}

export default App;
