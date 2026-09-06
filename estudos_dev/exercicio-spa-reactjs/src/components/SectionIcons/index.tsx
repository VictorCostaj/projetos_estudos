import styled from 'styled-components';

const WrapperIcons = styled.section`
    background-color: ${(props) => props.theme.background};
    width: 100%;
    height: 40vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 50px 0;
`;

const DivIcons = styled.div`
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    width: 25%;
    height: 80%;

    &:hover {
        background-color: #ccc;
        cursor: pointer;
    }
`;


const Icon = styled.span`
    font-size: 6rem;
    color: ${(props) => props.theme.primary};
`;

const Title = styled.h4`
    font-size: 2rem;
    color: ${(props) => props.theme.primary};
`;

const TextDescription = styled.p`
    color: ${(props) => props.theme.fontColor};
    font-size: 1.6rem;
    
`;





export {WrapperIcons, DivIcons, Icon, Title, TextDescription}