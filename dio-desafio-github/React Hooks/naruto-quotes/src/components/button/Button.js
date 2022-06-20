import styled from 'styled-components';
import { string } from 'prop-types';

export const Button = styled.button`
    background: #dc872c;
    color: #FFF;
    border: none;
    border-radius: 0;
    font-size: 1.5em;
    padding: 10px 20px;
    font-family: 'New Tegomin', serif;
    cursor: pointer;
    box-shadow: #333 3px 3px;

    &:hover {
        background: #a40000;
    }
`;

Button.prototypes = {
    children: string
};

