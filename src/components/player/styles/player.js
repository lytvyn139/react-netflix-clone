import styled from "styled-components/macro";

export const Container = styled.div``;

export const Overlay = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    margin: 0 20px;
`;

export const Inner = styled.div`
    position: relative;
    width: 100%;
    max-width: 900px;
    margin: auto;

    video {
        height: 100%;
        width: 100%;
    }

    @media (max-width: 500px) {
        video {
            height: 100%;
            width: 90%;
        }
    }
`;

export const Close = styled.button`
    position: absolute;
    right: 15px;
    top: 15px;
    width: 22px;
    height: 22px;
    background-color: transparent;
    border: 0;
    cursor: pointer;
    color: #ffffff;
    &:hover {
        opacity: 0.5;
        color: #ffffff;
    }

    &:before,
    &:after {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        left: 10px;
        top: 0;
        content: "";
        height: 22px;
        width: 2px;
        background-color: #ffffff;
        color: #ffffff;
    }

    &:before {
        transform: rotate(45deg);
        color: #ffffff;
    }
    &:after {
        transform: rotate(-45deg);
        color: #ffffff;
    }
`;

export const Button = styled.button`
    background-color: #e50914;
    border-color: #ff0a16;
    width: 115px;
    height: 45px;
    text-transform: uppercase;
    font-weight: bold;
    color: white;
    font-size: 18px;
    height: 45px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 0;

    &:hover {
        transform: scale(1.05);
        background-color: #ff0a16;
    }
`;
