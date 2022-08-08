import React from 'react'
import AddButton from '../Adding/AddButton'
import "./sty.css"
import styled from "styled-components";
import Homecomponent from "./index";

const Header = styled.span`
  color: black;
  font-size: 25px;
  font-weight: bold;
  @media screen and (max-width: 478px) {
    margin: 20px 0px;
  }
`;

export default function TrackerPage () {
    return (
      <div className='place-content-center flex flex-col justify-center items-center'>
        <Header>Отслеживать свои расходы 💰</Header>
        <Homecomponent/>
        {/* <AddButton/> */}
      </div>
    )
}