import React from 'react'
import styled from 'styled-components';

const Banner = () => {
  return (
    <BannerWrap>
      <Container>
        <Card>
          <h5 className='title'>NEW SEASON ARRIBALS</h5>
          <p className='content'>
            Check out all the trends
          </p>
        </Card>
      </Container>
    </BannerWrap>
  )
}

export default Banner;

const BannerWrap = styled.div`
  width: 100%;
  height: 550px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url('https://www.domusweb.it/content/dam/domusweb/en/news/2014/01/07/nendo_theory_shops/gallery/16_nendo-theory-melrose.jpg.foto.rmedium.png');
`;
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
`;
const Card = styled.div`
  color: yellow;
  display: flex;
  margin-left: 60px;
  flex-direction: column;
  justify-content: center;
  height: 100%;

  .title{
    font-weight: 900;
    font-size: 3rem;
  }
  .content{
    font-size: 2rem;
    font-weight: 300;
    letter-spacing: 1.5px;
  }
`;