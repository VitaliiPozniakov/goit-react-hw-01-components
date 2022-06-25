import styled from '@emotion/styled';

export const Table = styled.table`
  width: 100%;

  border: 1px solid rgba(238, 238, 238, 1);
  box-shadow: 1px 4px 6px 0px rgba(0, 0, 0, 0.16),
    0px 4px 4px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12);
`;

export const Thead = styled.thead`
  background-color: #5f9ea0;
  color: #ffffff;
`;

export const Tr = styled.tr`
  text-align: center;
  height: 45px;

  &:nth-of-type(2n) {
    background-color: rgba(238, 238, 238, 1);
  }
`;
