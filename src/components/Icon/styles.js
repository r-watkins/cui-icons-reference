import styled from 'styled-components';

const ButtonContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: ${props => props.theme.buttonHeight};
  background: ${props => props.theme.palette.button};
  opacity: 0;
  transition: opacity ${props => props.theme.transition};
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${props => props.theme.iconWidth};
  height: ${props => props.theme.iconHeight};
  border-radius: ${props => props.theme.borderRadius};
  background: ${props => props.theme.palette.foreground};
  transition: all ${props => props.theme.transition};

  &:hover {
    background: ${props => props.theme.palette.lightBackground};
    color: ${props => props.theme.palette.black};

    & ${ButtonContainer} {
      opacity: 1;
    }
  }

  &:last-child {
    margin-block-end: 3rem;
  }
`;

const Divider = styled.span`
  width: 2px;
  height: ${props => props.theme.buttonHeight};
  background: ${props => props.theme.palette.lightBackground};
`;

const P = styled.p`
  margin-block-start: 1rem;
  margin-block-end: 0;
  font-size: 0.7rem;
`;

export { Container, P, ButtonContainer, Divider };
