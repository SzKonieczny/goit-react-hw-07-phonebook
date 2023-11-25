import styled from '@emotion/styled';

export const Item = styled.li`
  margin-bottom: 15px;
  padding-left: 10px;
  padding-right: 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  transition: all 300ms ease 0s;
  box-shadow: #2fe6be;
  align-items: center;
  box-shadow: rgb(0 0 0) 0px 1px 5px;
  &:hover {
    background: ${props => props.theme.gradients.sunRise};
    box-shadow: rgb(0 0 0 / 89%) 0px 7px 10px;
  }
`;

export const ContactIt = styled.p`
  margin: 0;
  padding: 10px;
  margin-right: 20px;
  font-weight: 700;
`;
