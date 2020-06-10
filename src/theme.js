import { CalciteTheme } from 'calcite-react/CalciteThemeProvider';
import { unitCalc } from 'calcite-react/utils/helpers';

export const Theme = {
  ...CalciteTheme,
  palette: {
    ...CalciteTheme.palette,
    background: '#202020',
    foreground: '#2b2b2b',
    banner: '#353535',
    button: '#eaeaea',
    lightBackground: '#f8f8f8'
  },
  basePadding: CalciteTheme.baseline,
  searchPadding: unitCalc(CalciteTheme.baseline, 2, '*'),
  iconMargin: unitCalc(CalciteTheme.baseline, 2, '/'),
  iconWidth: '250px',
  iconHeight: '175px',
  buttonHeight: '2.3rem',
  border: '1px solid #eaeaea',
  borderRadius: '2px',
  boxShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
};
