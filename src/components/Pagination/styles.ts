import styled, { css } from "styled-components"

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
    border-top: solid 1px;
    border-bottom: solid 1px;
`
export const Arrow = styled.div`
    ${shared}
    height: 100%;
    width: 55px;
    font-size: 25px;
    border: solid 1px;
    cursor: pointer;
`

export const PaginationWrapper = styled.div`
    ${shared}
    text-align: center;
    height: 50px;
    ${Page}:nth-last-of-type(n+3){
        border-right: solid 1px;
    }
`
