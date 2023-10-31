import styled from "@emotion/styled";
import colors, {hexToRgba} from "../../constants/colors.ts";

const StyledDiv = styled.div`
  background: ${hexToRgba(colors.button.primary, .3)};
  height: 4rem;
  width: 4rem;
  overflow: hidden;
  border-radius: 2rem;
`;

const StyledImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  object-position: center;
`

function Avatar({image}: { image: string }) {
    return (
        <StyledDiv>
            <StyledImg src={image} alt="Avatar de l'utilisateur"/>
        </StyledDiv>
    );
}

export default Avatar;
