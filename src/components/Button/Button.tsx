import styled from "@emotion/styled";
import {getColorVariationEntity, variation} from "../../constants/colors.ts";

const Button = styled.button<{
    isDisabled?: boolean,
    variation?: keyof variation
}>`
  background: ${({variation}) => getColorVariationEntity(variation ?? "primary", "button")};
  opacity: ${({isDisabled}) => isDisabled ? 0.5 : 1};
  user-select: ${({isDisabled}) => isDisabled ? "none" : "initiale"};
  cursor: ${({isDisabled}) => isDisabled ? "unset" : "pointer"};
  color: ${({variation}) => getColorVariationEntity(variation ?? "primary", "btn-text")};
  
  &:hover {
    opacity: ${({isDisabled}) => isDisabled ? 0.5 : 1};
  }
`;

export default Button;
