import React from 'react'
import styled from 'styled-components';
import Navbar from '../Components/Navbar'
import Announcement from '../Components/Announcement'
import Footer from '../Components/Footer'
import { Add, Remove } from '@material-ui/icons';

const Container = styled.div``;

const Wrapper = styled.div`
    padding: 30px;
`;

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

const TopButtom = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props => props.type === 'filled' && 'none'};
    background-color: ${props => props.type === 'filled' ? 'teal' : 'transparent'};
    color: ${props => props.type === 'filled' && 'white'};
`;

const TopTexts = styled.div`

`;

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer; 
    margin: 0px 10px;
`;

const Buttom = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Info = styled.div`
    flex: 3;

`;

const Product = styled.div`
    display: flex;
    justify-content: space-between; 
`;

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`;

const Image = styled.img`
    width: 200px;
`;

const Detail = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column; 
    justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.span`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color}
`;  

const ProductSize = styled.span``;

const PriceDetails = styled.span`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ProductAmmountConatainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

const ProductAmount = styled.div`
    font-Size: 24px;
    margin: 5px 10px;
`;

const ProductPrice = styled.div`
    font-Size: 30px;
    font-weight: 200;
`;

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`;

const SummaryTitle = styled.h1`
    font-weight: 200;
`;

const SummaryItem = styled.div`
    margin: 30px 0px; 
    display: flex;
    justify-content: space-between;
`;

const SummaryItemText = styled.span`
    font-weight: ${props => props.type === 'total' && '500'};
    font-size: ${props => props.type === 'total' && '24px'};
`;

const SummaryItemPrice = styled.span`

`;

const Button = styled.button`
    border: none;
    width: 100%;
    height: 50px;
    background-color: teal;
    color: white;
    font-weight: 600;
`;

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`;

const Cart = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>  
            <Title>YOUR BAG</Title>
            <Top>
                <TopButtom>CONTINUE SHOPPING</TopButtom>
                <TopTexts>
                    <TopText>Shopping Bag (2)</TopText>
                    <TopText>Your Wishlist</TopText>
                </TopTexts>
                <TopButtom type = 'filled'>CHECK OUT</TopButtom>
            </Top>
            <Buttom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                            <Detail>
                                <ProductName><b>Product:</b>JESSE THUNDER</ProductName>
                                <ProductId><b>ID:</b>34958495</ProductId>
                                <ProductColor color='black' />
                                <ProductSize><b>Size:</b>39 </ProductSize>
                            </Detail>
                        </ProductDetail>
                        <PriceDetails>
                            <ProductAmmountConatainer>
                                <Add />
                                <ProductAmount>1</ProductAmount>
                                <Remove />
                            </ProductAmmountConatainer>
                            <ProductPrice>$30</ProductPrice>
                        </PriceDetails>
                    </Product>
                    <Hr />
                    <Product>
                        <ProductDetail>
                            <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
                            <Detail>
                                <ProductName><b>Product:</b> BOGGIE BOGGIE</ProductName>
                                <ProductId><b>ID:</b>3857385</ProductId>
                                <ProductColor color='gray' />
                                <ProductSize><b>Size:</b> L </ProductSize>
                            </Detail>
                        </ProductDetail>
                        <PriceDetails>
                            <ProductAmmountConatainer>
                                <Add />
                                <ProductAmount>1</ProductAmount>
                                <Remove />
                            </ProductAmmountConatainer>
                            <ProductPrice>$40</ProductPrice>
                        </PriceDetails>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>SubTotal</SummaryItemText>
                        <SummaryItemPrice>$70</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>$ 5.80</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping Discount</SummaryItemText>
                        <SummaryItemPrice>$-5.80</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText type='total'>Total</SummaryItemText>
                        <SummaryItemPrice>$70</SummaryItemPrice>
                    </SummaryItem>
                    <Button>CHECKOUT NOW</Button>
                </Summary>
            </Buttom>
        </Wrapper>
        <Footer />

    </Container>
  )
}

export default Cart