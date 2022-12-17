import React from 'react';
import styled from 'styled-components';
import Section from './Section.js';

const Home = () => {
  return (
    <Container>
        <Section
            title="Model S"
            description="Order Online For Touchless Delivery"
            backgroundImg="model-s.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
        />
        <Section
            title="Model 3"
            description="Order Online For Touchless Delivery"
            backgroundImg="model-3.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
        />
        <Section
            title="Model X"
            description="Order Online For Touchless Delivery"
            backgroundImg="model-x.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
        />
        <Section
            title="Model Y"
            description="Order Online For Touchless Delivery"
            backgroundImg="model-y.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
        />
        <Section
            title="Solar Panels"
            description="Order Online For Touchless Delivery"
            backgroundImg="solar-panel.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
        />
        <Section
            title="Solar Roof"
            description="Order Online For Touchless Delivery"
            backgroundImg="solar-roof.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
        />
        <Section
            title="Accessories"
            backgroundImg="accessories.jpg"
            leftBtnText="Shop Now"
        />
    </Container>
  )
}

export default Home

const Container = styled.div`
    height:100vh;
`