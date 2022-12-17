import React from 'react'
import styled from 'styled-components'

const Section = () => {
    return (
        <Wrap>
            <ItemText>
                <h1>Model S</h1>
                <p>Order Online For Touchless Delivery</p>
            </ItemText>

            <ButtonGroup>
                <LeftButton>
                    Custom Order
                </LeftButton>
                <RightButton>
                    Existing Inventory
                </RightButton>
            </ButtonGroup>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width:100vw;
    height:100vh;
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    background-image:url('/images/model-s.jpg');
`
const ItemText = styled.div`
    padding-top:15vh;
`
const ButtonGroup = styled.div`
    display:flex;
`
const LeftButton = styled.div`
    background-color:  rgb(50, 50, 57);
    color:white;
    height:40px;
    width:256px;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:20px;
    opacity:0.85;
`
const RightButton = styled(LeftButton)`

`