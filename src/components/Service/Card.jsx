import React from 'react'
import styled from 'styled-components';

const Card = (props) => {
    const { Icon, disc, title } = props;
  return (
    <Container>
        <span className='green'><Icon/></span>
        <h1>{title}</h1>
        <p>{disc}</p>
    </Container>
  )
}

export default Card;

const Container = styled.div`
    width: 50%;
    // background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
    text-align: center;
    span{
        font-size: 4rem;
    }
    
    h1{
        font-size: 1.2rem;
        padding-bottom: 1rem;
    }

    p{
        font-size: 0.1rem;
    }
`