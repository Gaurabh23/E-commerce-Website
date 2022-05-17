import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const Container = styled.div`
    height: 70px;
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Left = styled.div`
    flex:1;
    display: flex;
    align-items: center;
`;
const Right = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;
const Center = styled.div`
    flex:1;
    text-align: center;

`;
const Langugae = styled.div`
    font-size: 14px;
    cursor: pointer;
`;

const SearchContainer = styled.div`
    border: 1px solid lightgrey;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;

const Input = styled.input`
    border: none;
`;

const Logo = styled.h1`
    font-weight: bold;
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin: 25px;
    color: black;
`;

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Langugae>
                    EN
                </Langugae>
                <SearchContainer>
                    <Input />
                    <Search style={{color:'gray', fontSize:16}}/>
                </SearchContainer>
            </Left>
            <Center>
                <Logo>
                    FANCY.
                </Logo>
            </Center>
            <Right>
                <Link to = '/' style={{textDecoration:'none'}} ><MenuItem>HOME</MenuItem></Link>
                <Link to = '/productlist' style={{textDecoration:'none'}}><MenuItem>SHOP</MenuItem></Link>
                <Link to = '/login' style={{textDecoration:'none'}}><MenuItem>LOGIN</MenuItem></Link>
                <Link to = '/register' style={{textDecoration:'none'}}><MenuItem>REGISTER</MenuItem></Link>
                <Link to ='/cart' style={{textDecoration: 'none'}}>
                    <MenuItem>
                        <Badge badgeContent={2} color="primary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </MenuItem>
                </Link>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar