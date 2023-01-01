import React from 'react';

import Link from 'next/link';

type Props = {
  menuTitle: string;
  linkUrl: string;
};

const Menu = ({ menuTitle, linkUrl }: Props) => {
  return (
    <li className='px-12'>
      <Link href={linkUrl}>{menuTitle}</Link>
    </li>
  );
};

export default Menu;
