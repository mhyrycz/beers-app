import styled from "styled-components"

export const Wrapper = styled.div`
    height: 200px;
    width: 75%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    border: solid 1px;
    border-radius: 30px;
    margin-bottom: 50px;
    padding: 10px;
`

export const ImgWrapper = styled.div`
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Shorthand = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const Name = styled.div`
    font-size: 20px;
    font-weight: bold;
`

export const Arrow = styled.div`
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    cursor: pointer;
`