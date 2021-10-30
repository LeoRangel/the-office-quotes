import styled from 'styled-components';

export const Button = styled.button`
    background: #f27137;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 1.5em;
    padding: 10px 20px;
    cursor: pointer;
    // box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important;
    transition: 1s all;
    
    &:hover {
        // filter: brightness(95%);
        box-shadow: 0 1rem 3rem rgba(0,0,0,.175)!important;
    }
    
    &:focus {
        outline: none;
    }
`;

// type ButtonProps = {
//     children: string,
// }

// export const Button = ({ children }: ButtonProps) => {
//     return (
//         <button>
//             {children}
//         </button>
//     )
// }