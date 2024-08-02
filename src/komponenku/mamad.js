import styled from "styled-components"


export const Container = styled.div`
background-color: ${(prompt)=> prompt.Ubahbg ? "white" : "black"};
height: 650px;
display: flex;
justify-content: center;
align-items: center;
`
export const Button = styled.div`
border-radius: 100px;
background-color: ${(prompt)=> prompt.Ubahtombol ? "yellow" : "white"};
color: ${(prompt)=> prompt.Ubahtombol ? "white" : "black"};
height: 100px;
width: 100px;
display: flex;
align-items: center;
justify-content: center;
box-shadow: 0 0 24px 0px yellow;
border: none;
`