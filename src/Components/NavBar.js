import React from 'react'
import { Button,Form,Navbar,FormControl,Nav } from 'react-bootstrap';

function NavBar() {
    return (
        <div>
            <Navbar bg="light" expand="lg" className="Navi">
  
  <Navbar.Toggle aria-controls="navbarScroll"  />
  <Navbar.Collapse id="navbarScroll">
  <Navbar.Brand href="#"><i className="fab fa-youtube"></i>NewTube</Navbar.Brand>
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
    </Nav>
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
        style={{width:"500px"}}
      />
      <Button variant="outline-dark" id="btn"><i className="fas fa-search"></i></Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}
export default NavBar