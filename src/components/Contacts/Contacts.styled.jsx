import styled from "@emotion/styled";
import { displayFlex } from "utils/display-flex";

export const StyledContainerList = styled.ul`
    display: flex;
    flex-direction: column;
    padding: 0;
    margin-top: 20px;
    margin-left: 12px;
    gap: 20px;
    list-style-type: none;

    @media (min-width: 768px) {
        margin-left: 30px;
        margin-top: 30px;
    }

`
export const StyledItemList = styled.p`
    padding: 0;
    margin: 0;
    font-size: 16px;
    weight: 500;
    cursor: pointer;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    :hover,
    :focus {
        color: #3f51b5;
    }

    @media (min-width: 768px) {
        font-size: 20px;
        weight: 600;
    }

    @media (min-width: 1200px) {
    font-size: 24px;
    weight: 600;
    }
`
export const StyledFirstNameSpan = styled.span`
    margin-right: 20px;
`

export const StyledSecondNameSpan = styled.span`
    margin-right: 20px;

    @media (max-width: 1200px) {
        display: none;
    }
`
export const StyledNumberSpan = styled.span`
    @media (max-width: 768px) {
        display: none;
    }

`