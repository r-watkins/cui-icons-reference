import styled from 'styled-components';

import CalciteSearch from 'calcite-react/Search';

const Container = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 10% 90%;
`;

const Form = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 ${props => props.theme.searchPadding};
  background: ${props => props.theme.palette.banner};
  box-shadow: ${props => props.theme.boxShadow};
`;

const Search = styled(CalciteSearch)`
  width: 20rem;
  color: ${props => props.theme.palette.white};
`;

const List = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, ${props => props.theme.iconWidth});
  grid-template-rows: repeat(auto-fill, ${props => props.theme.iconHeight});
  justify-content: center;
  padding-block-start: 2rem;
  overflow-y: auto;
`;

const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-inline-start: ${props => props.theme.searchPadding};
`;

const SliderTitle = styled.p`
  margin-inline-end: 1rem;
`;

const SliderNumber = styled.p`
  margin-inline-start: 1rem;
`;

export {
  Container,
  Form,
  Search,
  List,
  SliderContainer,
  SliderTitle,
  SliderNumber
};
