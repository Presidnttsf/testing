import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';
import Header from "./MyComponents/Header";
import { Footer } from "./MyComponents/Footer";
import { Todos } from "./MyComponents/Todos";




function App() {
  return (
    <>


      <Header />
      <Todos />
      <Footer />


    </>
  );
}

export default App;
