import React from 'react';

import IconList from '../IconList/IconList';

import {
  Container,
  Header,
  Title,
  Logo,
  H1,
  H4,
  TopNavList,
  TopNavLink,
} from './styles';

import logo from '../../images/logo.svg';

// Component Definition
const App = (props) => {
  // Icon components are generated and injected from scripts/generate.js
  return (
    <Container>
      <Header>
        <Title>
          <Logo src={logo} />

          <H1>Calcite UI Icons for React</H1>

          <H4>v0.19.0</H4>
        </Title>

        <TopNavList>
          <TopNavLink href="https://esri.github.io/calcite-ui-icons">
            Calcite UI Icons
          </TopNavLink>

          <TopNavLink href="https://calcite-react.netlify.app/">
            Calcite-React
          </TopNavLink>

          <TopNavLink href="https://github.com/EsriPS/calcite-ui-icons-react">
            Github
          </TopNavLink>

          <TopNavLink href="https://www.npmjs.com/package/calcite-ui-icons-react">
            NPM
          </TopNavLink>
        </TopNavList>
      </Header>

      <IconList />
    </Container>
  );
};

export default App;
