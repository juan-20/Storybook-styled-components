import styled from 'styled-components';

interface ButtonProps {
    disabled?: boolean
    background?: string
}

export const Btn= styled.button<ButtonProps>`
    width: 124px;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    border: none;
    filter: brightness(${(props) => (props.disabled ? '0.6' : '1')});
    background: ${props => props.background};
    border: ${(props) => (props.background === '#C62C00' ? '1px solid #ccc' : '1px solid #333')};
    color: ${(props) => (props.background === '#C62C00' ? '#ccc' : '#fff')};
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    padding: 1rem;
    font-weight: 900;
    font-size: 12px;
    line-height: 20px;
    border-radius: 8px;
`;
