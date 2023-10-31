import styled from "@emotion/styled";

export const ColumnContainer = styled.div<{ spaceAfter?: number; spaceBefore?: number, gap?: number }>`
  display: flex;
  flex-flow: row wrap;
  max-width: 1140px;
  justify-content: space-evenly;
  gap: ${({gap}) => gap || .5}rem;
  margin-bottom: ${({spaceAfter}) => spaceAfter || 0}rem;
  margin-top: ${({spaceBefore}) => spaceBefore || 0}rem;
`
