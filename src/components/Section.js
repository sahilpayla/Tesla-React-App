import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';


const Section = ({ title, description, leftBtnText, rightBtnText, backgroundImg }) => {
    return (
        <Wrap bgImg={backgroundImg}>
            <Fade top>
                <ItemText>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </ItemText>
            </Fade>

            <Button>
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>
                            {leftBtnText}
                        </LeftButton>
                        {rightBtnText &&
                            <RightButton>
                                {rightBtnText}
                            </RightButton>
                        }
                    </ButtonGroup>
                    <DownArrow src="/images/down-arrow.svg" />
                </Fade>
            </Button>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    background-image:url('/images/model-3.jpg');
    background-image: ${props => `url(images/${props.bgImg})`}
`
const ItemText = styled.div`
    padding-top:15vh;
`
const ButtonGroup = styled.div`
    display:flex;
    margin-bottom:30px;
    @media (max-width:768px){
        flex-direction:column;
    }
`
const LeftButton = styled.div`
    background-color:  rgb(50, 50, 57);
    color:white;
    height:40px;
    font-size:12px;
    width:256px;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:20px;
    opacity:0.85;
    margin-top:10px;
    cursor:pointer;
`
const RightButton = styled(LeftButton)`
    background-color:whitesmoke;
    color:rgb(50, 50, 57);
    opacity:0.8s;
`
const DownArrow = styled.img`
    height:40px;
    overflow-x:hidden;
    animation:animatedown infinite 0.5s;
`
const Button = styled.div`

`