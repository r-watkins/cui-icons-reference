import styled from 'styled-components';

import {
  TopNavList as CalciteTopNavList,
  TopNavLink as CalciteTopNavLink
} from 'calcite-react/TopNav';
import { CalciteH1, CalciteH4 } from 'calcite-react/Elements';

const Container = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 10vh 90vh;
  overflow: hidden;
  background: ${props => props.theme.palette.background};
  color: ${props => props.theme.palette.white};
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  padding: 0 ${props => props.theme.basePadding};
  background: ${props => props.theme.palette.foreground};
`;

const Title = styled.span`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  margin-inline-end: 1rem;
`;

const H1 = styled(CalciteH1)`
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0;
  margin-inline-end: 2rem;
`;

const H4 = styled(CalciteH4)`
  margin: 0;
`;

const TopNavList = styled(CalciteTopNavList)`
  display: flex;
  align-items: flex-end;
  flex: none;
  height: 100%;
  margin: 0;
`;

const TopNavLink = styled(CalciteTopNavLink)`
  margin-inline-start: 1.5rem;
`;

export { Container, Header, Title, Logo, H1, H4, TopNavList, TopNavLink };
