import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    height: 70px;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(18, 107, 165, 1);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
    font-family: 'Lexend Deca', sans-serif;
    padding: 0 18px;

    p{
        width: auto;
        height: 49px;
        font-family: 'Playball', cursive;
        font-size: 39px;
        font-weight: 400;
        line-height: 49px;
        text-align: left;
        color: rgba(255, 255, 255, 1);

    }

    figure {
        width: 51px;
        height: 51px;
    }
    
    img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
`;