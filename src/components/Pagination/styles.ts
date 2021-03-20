import styled, { css } from "styled-components"

const border = "solid 2px"

const shared = () => css`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Page = styled.div<{ active?: boolean }>`
    ${shared}
    height: 100%;
    width: 55px;
    background-color: ${props => props.active ? "#05aff1" : "white"};
    transition: background-color 0.3s;
    border-top: ${border};
    border-bottom: ${border};
    :nth-last-of-type(n+3){
        border-right: ${border};
    }
`
export const Arrow = styled.div<{ disabled?: boolean }>`
    ${shared}
    height: 100%;
    width: 55px;
    font-size: 25px;
    border: ${border};
    :nth-of-type(1){
        border-radius: 10px 0 0 10px;
    }
    :nth-last-of-type(1){
        border-radius: 0 10px 10px 0;
    }
    cursor: ${props => props.disabled ? "no-drop" : "pointer"};
`

export const PaginationWrapper = styled.div`
    ${shared}
    text-align: center;
    height: 50px;
    position: fixed;
    bottom: 30px;
    width: 100%;
    display: flex;
    justify-content: center;
`
