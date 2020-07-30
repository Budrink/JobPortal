/** @jsx Preact.h */
/** @jsxFrag Preact.Fragment */

import Preact from 'react';
import React from 'react';
import { FC } from 'react';

export interface listItem {
  refString: string;
  nameString: string;
  styleString: string;
  id: number;
}

interface SubMenuProps {
  menu: listItem[];
  menustyle: string;
}
export const SubMenu: FC<SubMenuProps> = (props) => (
  <ul className={props.menustyle}>
    {props.menu.map((Item) => (
      <li key={Item.id} className={Item.styleString}>
        <a href={Item.refString}>{Item.nameString}</a>
      </li>
    ))}
  </ul>
);
