import React from 'react'
import styled from 'styled-components'
// icons-material
import LoginIcon from '@mui/icons-material/Login';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';import AddReactionOutlinedIcon from '@mui/icons-material/AddReactionOutlined';
const Header = () => {
  return (
    <HeaderWrap>
      <Container>
        <Logo>
          <a href='#'>E-COMMERCE</a>
        </Logo>
        <Nav>
          <li><a href='#'>Home</a></li>
          <li><a href='#' className='gray'>Products</a></li>
          <li><a href='#' className='gray'>About</a></li>
          <li><a href='#' className='gray'>Contact</a></li>
        </Nav>
        <Buttons>
          <button className='login'>
            <LoginIcon className='icons' />
            <span>Login</span>
          </button>
          <button className='login'>
            <AddReactionOutlinedIcon className='icons' />
            <span>Register</span>
          </button>
          <button className='login'>
            <ShoppingCartOutlinedIcon className='icons' />
            <span>Cart (0)</span>
          </button>
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

  button{
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
  button:hover{
    background-color: rgb(40, 40, 40);
    color: #fff;
  }
`;