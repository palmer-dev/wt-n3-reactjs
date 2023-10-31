import {ColumnContainer} from "../Container/ColumnContainer.ts";

type Props = {
    title: string;
    publication_date: Date;
}

function HeaderPost({title, publication_date}: Props) {
    return (
        <ColumnContainer>
            <h3>{title}</h3>
            <span>{publication_date.toLocaleDateString()}</span>
        </ColumnContainer>
    );
}

export default HeaderPost;
