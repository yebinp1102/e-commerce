import React, {useState, useEffect} from 'react';
import { NavLink, useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import StarIcon from '@mui/icons-material/Star';

const Product = () => {
  const {id} = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true);
    const getProduct = async () => {
      axios.get(`https://fakestoreapi.com/products/${id}`).then((response)=>{
        setProduct(response.data);
        setLoading(false);
      })
    }
    getProduct();
  },[]);

  const Loading = () => {
    return(
      <div>
        Loading...
      </div>
    )
  }
  const ShowProduct = () => {
    return(
      <Detials>
         <div className='productImg'>
           <img src={product.image} alt={product.title} />
         </div>
         <div className='productInfo'>
            <h4 className='category'>{product.category}</h4>
            <h1 className='title'>{product.title}</h1>
            <div className='rating'>
              <p>Rating {product.rating && product.rating.rate}</p>
              <span><StarIcon /></span>
            </div>
            <h1 className='price'>$ {product.price}</h1>
            <p className='desc'>{product.description}</p>
            <div className='btns'>
              <button>Add to Cart</button>
              <NavLink to="/cart" className='cartBtn'>Go to Cart</NavLink>
            </div>
         </div>
      </Detials>
    )
  }
  
  return (
    <Container>
      <Row>
        <ShowProduct />
        {/* {loading ? <Loading /> : <ShowProduct />} */}
      </Row>
    </Container>
  )
}

export default Product

const Container = styled.div`
`;
const Row = styled.div``;

const Detials = styled.div`
  max-width: 1200px;
  margin: 50px auto;
  padding: 60px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  img{
    height: 400px;
    height: 400px;
  }

  .productInfo{
    display: flex;
    flex-direction: column;
    margin-top: 20px;

    .category{
      color: gray;
      font-size: 1.5rem;
      text-transform: uppercase;
      margin-bottom: 20px;
    }

    .rating{
      display: flex;
      align-items: center;
      font-weight: bold;
      font-size: 1.2rem;
      margin: 10px 0;
      color: salmon;

      p{
        margin-right: 5px;
      }
    }
    
    .desc{
      line-height: 1.5;
      font-size: 1.2rem;
      margin: 20px 0;
      color: gray;
    }

    .btns{
      button,
      .cartBtn{
        background-color: #fff;
        border: 2px solid gray;
        border-radius: 5px;
        padding: 10px 20px;
        cursor: pointer;
        margin-right: 10px;
        transition: all .2s ease-in;
      }
      button:hover{
        background-color: #000;
        color: #fff;
      }

      .cartBtn{
        background-color: #000;
        color: #fff;
        padding: 10px 20px;
        border: none;
      }
    }
  }
`;