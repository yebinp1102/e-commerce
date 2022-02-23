import React, { useState, useEffect } from 'react'
import axios from 'axios';
import styled from 'styled-components';

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  let componentMounted = true;

  useEffect(()=>{
    const getProducts = async () => {
      setLoading(true);
      axios.get('https://fakestoreapi.com/products').then((response)=>{
        if(componentMounted){
          setData(response.data);
          setFilter(response.data);
          setLoading(false);
        }
      })
      return () => componentMounted = false;
    }
    getProducts();
  },[]);

  const Loading = () => {
    return(
      <div className='loading'>
        Loading . . .
      </div>
    )
  }

  const filterProduct = (cate) => {
    const updatedList = data.filter((x)=>x.category === cate);
    setFilter(updatedList);
  }

  const ShowProducts = () => {
    return(
      <div>
        <div className='buttons'>
          <button className='button' onClick={()=>setFilter(data)}>All</button>
          <button className='button' onClick={()=>filterProduct("men's clothing")}>Men's Clothing</button>
          <button className='button' onClick={()=>filterProduct("women's clothing")}>Women's Clothing</button>
          <button className='button' onClick={()=>filterProduct("jewelery")}>Jewelery</button>
          <button className='button' onClick={()=>filterProduct("electronics")}>Electronics</button>
        </div>
        <div className='productWrap'>
          {filter.map((product)=>{
            return(
              <div className='productInfo' key={product.id}>
                <img src={product.image} className='card' alt={product.title} />
                  <div className='cardBody'>
                    <h5 className='cardTitle'>{product.title.substring(0, 12)}</h5>
                    <p className='cardText'>
                      ${product.price}
                    </p>
                  <a href='#' className='productBotton'>Buy now</a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
 

  return (
    <ProductsWrap>
      <Container>
        <Row>
          <div className='titleWrap'>
            <h1 className='title'>Latest Produts</h1>
            <hr />
          </div>
        </Row>
        <Row>
          <div className='itemLoading'>
            {loading ? <Loading/> : <ShowProducts />}
          </div>
        </Row>
      </Container>
    </ProductsWrap>
  )
}

export default Products
const ProductsWrap = styled.div`
`;
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px;
  width: 100%;
`;
const Row = styled.div`
  text-align: center;
  .titleWrap{
    width: 100%;

    .title{
      margin: 30px 0;
    }
  }

  .loading{
    margin-top: 80px;
    font-size: 2rem;
  }

  .buttons{
    margin-top: 50px;
    display: flex;
    justify-content: center;

    .button{
      margin-right: 10px;
      padding: 10px;
      border: 1px solid lightgray;
      border-radius: 5px;
      background-color: #fff;
      font-size: 14px;
      cursor: pointer;
    }
    .button:hover{
      background-color: black;
      color: #fff;
    }
  }

  .productWrap{
    max-width: 1200px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
    margin-top: 50px;    

    .productInfo{
      border: 1px solid lightgray;
      padding: 30px;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      img{
        height: 150px;
        margin-bottom: 15px;
      }

      .cardText{
        font-weight: bold;
        margin: 10px 0 15px 0;
      }

      .productBotton{
        padding: 8px;
        font-size: 14px;
        background-color: #FFB171;
        color: #fff;
        border-radius: 5px;
      }
      .productBotton:hover{
        background-color: orange;
      }
    }
  }
`;
