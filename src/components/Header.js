import React from 'react'
import styled from 'styled-components'
// icons-material
import LoginIcon from '@mui/icons-material/Login';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';import AddReactionOutlinedIcon from '@mui/icons-material/AddReactionOutlined';

import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <HeaderWrap>
      <Container>
        <Logo>
          <NavLink to='#'>E-COMMERCE</NavLink>
        </Logo>
        <Nav>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/products' className='gray'>Products</NavLink></li>
          <li><NavLink to='/about' className='gray'>About</NavLink></li>
          <li><NavLink to='/contact' className='gray'>Contact</NavLink></li>
        </Nav>
        <Buttons>
          <NavLink to="/login" className='btn'>
            <LoginIcon className='icons' />
            <span>Login</span>
          </NavLink>
          <NavLink to="/register" className='btn'>
            <AddReactionOutlinedIcon className='icons' />
            <span>Register</span>
          </NavLink>
          <NavLink to="/cart" className='btn'>
            <ShoppingCartOutlinedIcon className='icons' />
            <span>Cart (0)</span>
          </NavLink>
        </Buttons>
      </Container>
    </HeaderWrap>
  )
}

export default Header;

const HeaderWrap = styled.div`
  width: 100%;
  background: #F0F0F0;
  border-bottom: 3px solid lightgray;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;
const Nav = styled.ul`
  display: flex;
  font-size: 18px;

  .gray{
    color: gray;
  }

  li{
    margin-right: 15px;

    a:hover{
      color: black;
    }
  }
`;
const Buttons = styled.div`
  display: flex;

  .btn{
    margin-right: 10px;
    padding: 8px 10px;
    background-color: transparent;
    border: 1px solid black;
    border-radius: 5px;
    display: flex;
    align-items: center;

    .icons{
      font-size: 18px;
      margin-right: 8px;
    }
  }
  .btn:hover{
    background-color: rgb(40, 40, 40);
    color: #fff;
  }
`;