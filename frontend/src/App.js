import { Container } from "react-bootstrap";
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import CakeScreen from "./screens/CakeScreen";

function App() {
  return (
    <Router>
      <Header/>
      <main className="py-4"> 
        <Container>
        <Routes>
          <Route path='/' element={<HomeScreen />} exact />
          <Route path='/cake/:id' element={<CakeScreen />}  />
        </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
