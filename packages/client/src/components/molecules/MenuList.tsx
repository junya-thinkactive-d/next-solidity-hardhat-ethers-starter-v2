import React from 'react';

import { Menu } from '@/components/atoms/index';

type MenuType = {
  menuTitle: string;
  linkUrl: string;
};

type Props = {
  menus: MenuType[];
};

const MenuList = ({ menus }: Props) => {
  return (
    <ul className='flex'>
      {menus.map((menu, i) => (
        <Menu key={i} menuTitle={menu.menuTitle} linkUrl={menu.linkUrl} />
      ))}
    </ul>
  );
};

export default MenuList;
