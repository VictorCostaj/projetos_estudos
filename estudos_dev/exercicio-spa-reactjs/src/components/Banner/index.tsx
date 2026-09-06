import styled from 'styled-components';

interface BannerProps {
    size: number;
}

const Banner = styled.section<BannerProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: ${(props) => props.size}vh;
    background-image: url(./assets/images/ocean.jpg);
    background-size: cover;
    background-position: center;
`;


const TitleBanner = styled.h2`
    text-align: center;
    font-size: 4rem;
    color: #fff;
    font-family: 'Montserrat', sans-serif;
  
`

export { Banner, TitleBanner } ;