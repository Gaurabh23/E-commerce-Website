import React from 'react'
import styled from 'styled-components'

const Anct = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: 500;
`;

const Announcement = () => {
  return (
    <Anct>
        Super Deal !!! Free Shipping on Order over Rs 3000.
    </Anct>
  )
}

export default Announcement