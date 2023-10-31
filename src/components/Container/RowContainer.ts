import styled from "@emotion/styled";

export const RowContainer = styled.div<{ spaceBefore?: number; spaceAfter?: number }>`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  gap: .5rem;
  margin-bottom: ${({spaceAfter}) => spaceAfter || 0}rem;
  margin-top: ${({spaceBefore}) => spaceBefore || 0}rem;
}
`
