// project import
import other from './other';
import pages from './pages';
import { NavItemType } from 'types/menu';

// third-party
import { FormattedMessage } from 'react-intl';
import { HomeOutlined } from '@ant-design/icons';

// icons
const icons = { HomeOutlined };

// ==============================|| MENU ITEMS ||============================== //

const menuItems: { items: NavItemType[] } = {
  items: [
    {
      id: 'dashboard',
      title: <FormattedMessage id="dashboard" />,
      type: 'item',
      url: '/dashboard',
      icon: icons.HomeOutlined,
      target: false
    },
    pages,
    other
  ]
};

export default menuItems;
