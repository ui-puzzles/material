import { Menu, MenuProps } from '@arco-design/web-react';
import {
  // IconHome,
  IconCalendar,
} from '@arco-design/web-react/icon';
import { useNavigate } from 'react-router-dom';

const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;

export function TopMenus(props: TopMenusProps) {
  const {
    menus,
    defaultOpenKeys,
    defaultSelectedKeys,
    mode = 'horizontal',
  } = props;
  const navigate = useNavigate();

  const handleClickMenuItem = (key: string) => {
    navigate(key);
  };

  return (
    <Menu
      defaultOpenKeys={defaultOpenKeys}
      mode={mode}
      defaultSelectedKeys={defaultSelectedKeys}
      onClickMenuItem={handleClickMenuItem}
    >
      {menus.map(({ id, children, title: parentTitle, icon }) => {
        if (children && children.length > 0) {
          return (
            <SubMenu
              key={id}
              title={
                <span>
                  <IconCalendar />
                  {parentTitle}
                </span>
              }
            >
              {children.map(({ id, title }) => (
                <MenuItem key={id}>
                  {icon}
                  <span>{title}</span>
                </MenuItem>
              ))}
            </SubMenu>
          );
        }

        return <MenuItem key={id}>{parentTitle}</MenuItem>;
      })}
    </Menu>
  );
}

export interface IMenuItem {
  title: string;
  id: string;
  disabled?: boolean;
  hidden?: boolean;
  icon?: React.ReactNode;
  url?: string;
  children?: IMenuItem[];
}

interface TopMenusProps {
  menus: IMenuItem[];
  mode?: MenuProps['mode'];
  defaultOpenKeys?: string[];
  defaultSelectedKeys?: string[];
}
