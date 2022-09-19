import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import { Link } from "react-scroll";
// import  {selectCars} from "../features/car/carSlice";
// import { useSelector } from "react-redux";

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  // const cars = useSelector(selectCars);
  // console.log(selectCars);

  return (
    <Container>
      <Link to="models" spy={true} smooth={true} offset={0} duration={500} style={{cursor: 'pointer'}}>
        <img src="/images/logo.svg" alt="" />
      </Link>
      <Menu>
        <Link to="models" spy={true} smooth={true} offset={0} duration={500} style={{cursor: 'pointer'}} >
          Model S
        </Link>
        <Link to="model3" spy={true} smooth={true} offset={0} duration={500} style={{cursor: 'pointer'}} >
          Model 3
        </Link>
        <Link to="modelx" spy={true} smooth={true} offset={0} duration={500} style={{cursor: 'pointer'}}>
          Model X
        </Link>
        <Link to="modely" spy={true} smooth={true} offset={0} duration={500} style={{cursor: 'pointer'}}>
          Model Y
        </Link>
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Account</a>
        <CustomMenu onClick={() => setBurgerStatus(true)} />
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>

        <li>
          <a href="#">Existing Inventory</a>{" "}
        </li>
        <li>
          <a href="#">Used Inventory</a>{" "}
        </li>
        <li>
          <a href="#">Trade-in</a>{" "}
        </li>
        <li>
          <a href="#">Cybertruck</a>{" "}
        </li>
        <li>
          <a href="#">Roadaster</a>{" "}
        </li>
        <li>
          <a href="#">Existing Inventory</a>{" "}
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
    transition: all .2s ease-in-out;
    :hover{
     
      transform: scale(1.1);
    }
  }
  // Link:hover{
  //   background-color: rgb(58, 156, 151);
  // }
  @media (max-width: 768px) {
    display: none;
  }
`;
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
    transition: all .2s ease-in-out;
    :hover{
     
      transform: scale(1.1);
    }
  }
`;

const CustomMenu = styled(AiOutlineMenu)`
  cursor: pointer;
  transition: all .2s ease-in-out;
  :hover{
   
    transform: scale(1.1);
  }
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    transition: all .1s ease-in-out;
    :hover{
      background-color: rgb(211, 228, 232);
      transform: scale(1.05);
    }
    a {
      font-weight: 600;
      
    }
  }
`;
const CustomClose = styled(ImCross)`
  cursor: pointer;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
