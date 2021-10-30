import styled from 'styled-components';
import imgBg from '../../assets/images/bg.jpg'

export const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
position: relative;
background: url(${imgBg}) center no-repeat;
background-size: cover;
`;

export const CharacterImage = styled.img`
height: 100%;
width: auto;
align-self: flex-end;
`;