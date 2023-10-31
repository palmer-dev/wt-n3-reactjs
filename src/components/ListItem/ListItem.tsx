import styled from "@emotion/styled";
import Avatar from "../Avatar/Avatar.tsx";
import colors from "../../constants/colors.ts";

type Props = {
    avatar: string;
    name: string;
    onClick: () => void;
}

function ListItem({avatar, name, onClick}: Props) {
    return (
        <ItemContainer onClick={onClick}>
            <Avatar image={avatar}/>
            <Name>{name}</Name>
        </ItemContainer>
    );
}

const Name = styled.h3`
  color: white;
`


const ItemContainer = styled.div`
  background: ${colors.button.primary};
  padding: .5rem 1rem;
  border-radius: 0 .5rem 0 .5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`

export default ListItem;
