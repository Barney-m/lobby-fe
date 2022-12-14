import { useSelector } from 'react-redux';

// material-ui
import { Box, Typography } from '@mui/material';

// project import
import NavGroup from './NavGroup';
import NavItem from './NavItem';
import menuItem from 'menu-items';

// types
import { RootStateProps } from 'types/root';

// ==============================|| DRAWER CONTENT - NAVIGATION ||============================== //

const Navigation = () => {
  const menu = useSelector((state: RootStateProps) => state.menu);
  const { drawerOpen } = menu;

  const navGroups = menuItem.items.map((item) => {
    switch (item.type) {
      case 'group':
        return <NavGroup key={item.id} item={item} />;
      case 'item':
        return <NavItem key={item.id} item={item} level={1} />;
      default:
        return (
          <Typography key={item.id} variant="h6" color="error" align="center">
            Fix - Navigation Group
          </Typography>
        );
    }
  });

  return <Box sx={{ pt: drawerOpen ? 2 : 0, '& > ul:first-of-type': { mt: 0 } }}>{navGroups}</Box>;
};

export default Navigation;
