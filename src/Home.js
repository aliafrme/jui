import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState , useEffect } from 'react'
import axios from 'axios'
import Alert from 'react-bootstrap/Alert';


function Home() {
  let [ data , setData ] = useState(null)

  useEffect( () => {
axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY").then(resp => setData(resp.data))
  }, [])
  return (
    <div className="Home">

 <Navbar className="Navbar" style={{ backgroundColor: '#4B4B4B' , }}>
        <Container>
 
          <Nav className="me-auto">
            <Link to="/"  style={{ color:'#ddd', paddingLeft: 13, textDecoration: 'none' }}>Home</Link>
            <Link to="/Login"  style={{ color:'#ddd', paddingLeft: 13, textDecoration: 'none' }}>Sign up</Link>
            <Link to="/Login" style={{ color:'#ddd', paddingLeft: 13, textDecoration: 'none' }}>Log in</Link>

          </Nav>
        </Container>
  </Navbar>

      <header className="App-header">
      <h1>{data && data.title }</h1>
      </header>
      <br />
      {!data && <p>Please wait ..</p>}
      <p> {data && <p>Data</p> && data.date}</p>
    <img src={data && data.url } className="img" />
     {[
    
        'success',
        
      ].map((variant) => (
   <Alert key={variant} variant={variant}>{data && data.explanation }</Alert>
       ))}
    </div>

  );
}

export default Home;
