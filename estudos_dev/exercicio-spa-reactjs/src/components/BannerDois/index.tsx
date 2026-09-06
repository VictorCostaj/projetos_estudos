import styled from 'styled-components'

const SectionBannerPai = styled.section`
display:flex;
justify-content:space-evenly;
overflow-x: hidden;
`;

const SectionBanner = styled.section`
display:flex;
justify-content:space-around;
width: 50%;
height: 75vh;
`;


const SectionBannerDois = styled.section`
background-image: url(./assets/images/dev-2.jpg);
width: 50%;
height: 75vh;
border-radius: 2px;
display:flex
`;


const BannerDois = styled.div`
font-size: 25px;
margin: 10px;
text-align:justify ;
`;


export { SectionBanner, BannerDois, SectionBannerPai, SectionBannerDois}