import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    height: 100%;
    font-family: 'Special Elite', cursive;
    
    figure {
        margin: 0;
        width: fit-content;
        display: flex;
        flex-direction: column;
        margin-bottom: 50px;

        blockquote {
            margin: 0;
            max-width: 300px;
            padding: 15px;
            background: #ffff;
            border-radius: 5px;
            font-size: 1.5em;
        }
        figcaption {
            margin-top: 10px;
            align-self: flex-end;
        }
    }
`;

export const Quote = styled.p``;

export const Speaker = styled.figcaption``;
