import styled from "styled-components";

type ButtonStyleProps ={
    bg:string
}

export const ButtonStyle = styled.button`
    border:0;
    padding: 7px;
    background-color: ${(props:ButtonStyleProps)=>props.bg};
    color: white;
    border-radius: 4px;
`