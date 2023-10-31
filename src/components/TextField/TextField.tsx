import styled from "@emotion/styled";
import {getColorVariationEntity, variation} from "../../constants/colors.ts";

export const TextField = styled.input<{
    isDisabled?: boolean,
    variation?: keyof variation
}>`
  opacity: ${({isDisabled}) => isDisabled ? 0.5 : 1};
  user-select: ${({isDisabled}) => isDisabled ? "none" : "initiale"};
  cursor: ${({isDisabled}) => isDisabled ? "unset" : "text"};
  padding: .6rem 1.2rem;
  border-radius: .5rem;
  font-size: 1rem;
  flex: 1;
  border: 1px solid ${({variation}) => getColorVariationEntity(variation ?? "primary", "button")};
  
  &:hover {
    opacity: ${({isDisabled}) => isDisabled ? 0.5 : 1};
  }
`;
