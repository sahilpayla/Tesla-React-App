import React, { useState } from 'react'
import styled from 'styled-components'

const Header = () => {
    const [closeStatus, setCloseStatus] = useState()
    return (
        <Container>
            <a href="#">
                <img src="/images/logo.svg" />
            </a>

            <Menu>
                <a href="#">Model 3</a>
                <a href="#">Model X</a>
                <a href="#">Model Y</a>
                <a href="#">Model S</a>
                <a href="#">Solar Panels</a>
                <a href="#">Solar Roofs</a>
            </Menu>

            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Account</a>
                <CustomMenu onClick={() => setCloseStatus(true)}>≡</CustomMenu>
            </RightMenu>

            <BurgerNav show={closeStatus}>
                <CustomClose onClick={() => setCloseStatus(false)}>×</CustomClose>
                <li> <a href="#">Existing Inventory</a> </li>
                <li> <a href="#">Used Inventory </a> </li>
                <li> <a href="#">Trade-In </a> </li>
                <li> <a href="#">Test Drive </a> </li>
                <li> <a href="#">Insurance </a> </li>
                <li> <a href="#">CyberTruck </a> </li>
                <li> <a href="#">Semi </a> </li>
                <li> <a href="#">Charging </a> </li>
                <li> <a href="#">Commercial Energy </a> </li>
                <li> <a href="#">Utilities </a> </li>
                <li> <a href="#">Find US </a> </li>
                <li> <a href="#">Support </a> </li>
            </BurgerNav>
        </Container>
    )
}

export default Header

const Container = styled.div`
    min-height:60px;
    position:fixed;
    display:flex;
    align-items:center;
    padding: 0 20px;
    justify-content:space-evenly;
    top:0;
    left:0;
    right:0;
    z-index:10;
`
const Menu = styled.div`
    a{
        color:black;
        padding:5px 10px;
        font-weight:bold;
        letter-spacing:1px;
        flex-wrap:nowrap;
        font-size:15px;
        margin-right:2px;
            &:hover{
            background-color:rgb(200 218 218);
            transition:0.2s;
        }
    }
    display:flex;
    justify-content:center;
    flex:1;
    align-items:center;
    @media(max-width:860px){
        display:none;
    }
`
const RightMenu = styled.div`
    a{
        color:black;
        padding:5px 10px;
        margin-right:10px;
        font-size:15px;
            &:hover{
            background-color:rgb(200 218 218);
            transition:0.2s;
            padding:5px 10px;
        }
    }
    display:flex;
    font-weight:bold;
    align-items:center;
`
const CustomMenu = styled.div`
    cursor:pointer;
    font-size:30px;
    padding:0 20px;
    transition:0.5s;
    &:hover{
        animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
        transform: translate3d(0, 0, 0);
        backface-visibility: hidden;
        perspective: 1000px;
        text-shadow:2px 1px 15px pink;
        color:red;
    }
`
const BurgerNav = styled.div`
    li{
        padding:10px 10px;
        width:100%;
    }
    transform:${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.9s;
    position:fixed;
    top:0;
    right:0;
    bottom:0;
    list-style:none;
    width:300px;
    background-color:black;
    opacity:0.5;
    font-size:14px;
    padding: 20px; 
    font-weight:bold;
    text-align:left;
    a{
        padding:5px 10px;
        color:white;
        &:hover{
           background-color:darkgrey;
           color:black; 
        }
    }
`
const CustomClose = styled.div`
    color:white;
    font-size:40px;
    display:flex;
    cursor:pointer;
    justify-content:flex-end;
    &:hover{
        transition:0.2s;
        text-shadow: 2px 2px 15px red;
        color:red;
    }
`