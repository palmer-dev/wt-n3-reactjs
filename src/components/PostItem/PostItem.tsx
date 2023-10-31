import HeaderPost from "./HeaderPost.tsx";
import styled from "@emotion/styled";
import colors from "../../constants/colors.ts";

type Props = {
    title: string;
    image: string;
    description: string;
    publication_date: Date;
    onClick: () => void;
}

function PostItem({title, image, description, publication_date, onClick}: Props) {
    return (
        <ColumnContainerMaxWidth onClick={onClick}>
            <HeaderPost title={title} publication_date={publication_date}/>
            <p>{description}</p>
            <Image src={image} alt="image du post"/>
        </ColumnContainerMaxWidth>
    );
}

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const ColumnContainerMaxWidth = styled.div`
  display: flex;
  flex-flow: column;
  max-width: calc(33%);
  background: ${colors.button.primary};
  color: ${colors["btn-text"].primary};
  border-radius: 20px;
  padding: 1.5rem 3rem;
`

export default PostItem;
