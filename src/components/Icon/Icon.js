import React from 'react';

import CopyButton from '../CopyButton/CopyButton';

import { Container, P, ButtonContainer, Divider } from './styles';

// Component Definition
const Icon = props => {
  return (
    <Container>
      {props.children}

      <P>{props.name}</P>

      <ButtonContainer>
        <CopyButton copy={props.name}>Name</CopyButton>

        <Divider />

        <CopyButton copy={props.import}>Import</CopyButton>
      </ButtonContainer>
    </Container>
  );
};

export default Icon;
