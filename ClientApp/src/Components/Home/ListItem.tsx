import React from 'react';

import { FC } from 'react';

interface listItemProps {
  refString: string;
  nameString: string;
  styleString: string;
}
export const ListItem: FC<listItemProps> = (props) => (
  <li className={props.styleString}>
    <a href={props.refString}>{props.nameString}</a>
  </li>
);
