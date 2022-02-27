import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { delCart } from '../redux/action/index';
import handleCart from '../redux/reducer/handleCart';

import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
import { NavLink } from 'react-router-dom';

const Cart = () => {
  const state = useSelector((state)=> state.handleCart);
  const dispatch = useDispatch();

  const handleClose = (item) =>{
    dispatch(delCart(item))
  }

  const cartItmes = (cartItem) => {
    return(
      <div key={cartItem.id} className='itemWrap'>
        <div className='container'>
          <div className='itemDetails'>
            <div className='itemImg'>
              <img src={cartItem.image} alt={cartItem.title} height="200px" width="180px" />
            </div>
            <div className='itemInfo'>
              <h3>{cartItem.title}</h3>
              <p className='price'>${cartItem.price}</p>
            </div>
          </div>
          <CloseIcon className='btn' onClick={()=>handleClose(cartItem)} />
        </div>
      </div>
    )
  }

  const Notice = () => {
    return(
      <h1 className='notice'>Nothing's in the cart!</h1>
    )
  }


  return (
    <Container>
      {state.length !== 0 ? state.map(cartItmes) : <Notice />}
    </Container>
  )
}

export default Cart;

const Container = styled.div`
  .itemWrap{
    margin-top: 30px;
  
    .container{
      border: 1.5px solid lightgray;
      border-radius: 5px;
      max-width: 1200px;
      margin: 0 auto;
      padding: 30px;
      display: flex;
      justify-content: space-between;

      .itemDetails{
        display: flex;
        align-items: center;

        .itemImg{
          margin-right: 50px;
        }
      }

      .price{
        margin-top: 20px;
        font-size: 1.5rem;
        font-weight: bold;
      }

      .btn{
        cursor: pointer;
        margin-right: 20px;
        text-align: right;
        background-color: salmon;
        color: #fff;
      }
    }
  }

  .notice{
    text-align: center;
    margin-top: 400px;
  }
`;