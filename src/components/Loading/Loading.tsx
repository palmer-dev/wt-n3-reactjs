import {useState} from "react";
import styled from "@emotion/styled";

const FlexDiv = styled.div`
  display: flex;
  flex-flow: row;
`

const DotAnimated = styled.div`
  -webkit-animation: .3s jumping 0s infinite alternate;
  -o-animation: .3s jumping 0s infinite alternate;
  animation: .3s jumping 0s infinite alternate;
`

function Loading() {
    const [dots, setDots] = useState<string[]>([]);

    setInterval(() => {
        setDots([...dots, "."])
    }, 500)

    return (
        <>
            <FlexDiv>
                Loading {dots.map((d, index) => (
                <DotAnimated key={"dot" + index} id={"dot" + index}>{d}</DotAnimated>))}
            </FlexDiv>
        </>
    );
}

export default Loading;
