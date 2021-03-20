import styled from "styled-components"

export const Wrapper = styled.div`
    width: 80%;
    display: flex;
    flex-direction: row;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

export const Info = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const ImgWrapper = styled.div`
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Name = styled.div`
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 10px;
`

export const Description = styled.div`
    font-size: 20px;
    text-align: justify;
    margin-bottom: 5px;
`

export const Feature = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 20px;
    margin-bottom: 5px;
`
export const Key = styled.div`
    font-weight: bold;
`
export const Value = styled.div`
    padding-left: 10px;
`
