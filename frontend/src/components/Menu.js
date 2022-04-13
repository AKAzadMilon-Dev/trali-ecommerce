import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container } from 'rsuite';
import { FaRegUserCircle,FaRegHeart } from 'react-icons/fa';
import { VscLaw } from "react-icons/vsc";
import { BsCart3 } from "react-icons/bs";
import axios from 'axios'

const Menu = () => {
  
  const [logo, setLogo] = useState({})

    useEffect(async()=>{
      const data = await axios.get("http://localhost:8000/logo")
      setLogo(data.data.img)
    },[])

  return (
    <>
        <Container className='container'>
          <Navbar >
            <Navbar.Brand href="#">
              <img className='logo' src={logo} alt="logo" />
            </Navbar.Brand>
            <Nav className='menu-item'>
              <Nav.Item eventKey="1" > HOME</Nav.Item>
              <Nav.Item eventKey="2">PAGES</Nav.Item>
              <Nav.Item eventKey="3">BLOG</Nav.Item>
              <Nav.Item eventKey="3">CONTACTS</Nav.Item>
            </Nav>
            <Nav className='menu-icon'>
              <FaRegUserCircle className='icon'/>
              <FaRegHeart className='icon'/>
              <VscLaw className='icon'/>
              <span className='cart'>
                <BsCart3 className='icon'/>
                <span className='round'>15</span>
              </span>
            </Nav>
          </Navbar>
        </Container>
    </>
  )
}

export default Menu