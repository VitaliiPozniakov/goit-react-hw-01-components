import styled from '@emotion/styled';

export const Item = styled.ul`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  width: 235px;
  border: 1px solid #000;
  margin: 0 auto;
  border: 1px solid rgba(238, 238, 238, 1);
  box-shadow: 1px 4px 6px 0px rgba(0, 0, 0, 0.16),
    0px 4px 4px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12);

  &:last-child {
    margin-bottom: 0;
  }
`;

export const StatusTrue = styled.span`
  display: block;
  width: 15px;
  height: 15px;
  margin-right: 20px;
  border-radius: 50%;
  background: green;
`;

export const StatusFalse = styled.span`
  display: block;
  width: 15px;
  height: 15px;
  margin-right: 20px;
  border-radius: 50%;
  background: red;
`;

export const Avatar = styled.img`
  padding: 15px;
  margin-right: 20px;
  border: 1px solid rgba(238, 238, 238, 1);
  border-radius: 50%;
`;

export const Name = styled.p`
  color: black;
  font-size: 18px;
  font-weight: 700;
  line-height: 2;
  letter-spacing: 0.06em;
`;
