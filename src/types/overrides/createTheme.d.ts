/* eslint-disable @typescript-eslint/no-unused-vars */
// material-ui
import * as Theme from '@mui/material/styles';

// project import
import { CustomShadowProps } from 'types/theme';

declare module '@mui/material/styles' {
  interface Theme {
    customShadows: CustomShadowProps;
  }
}
