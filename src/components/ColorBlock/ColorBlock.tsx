import React from 'react';
import { IColors } from '../colors';

interface IColorBlock {
  items: IColors[];
  callback: (id: number, color: string) => void;
  addShadow: (idx: number) => string | undefined;
  currentColor: string;
}

const ColorBlock: React.FC<IColorBlock> = ({
  items,
  callback,
  addShadow,
  currentColor,
}) => {
  return (
    <ul className="colorBlockList">
      {items.map(({ id, color }, idx) => {
        return (
          <li
            onClick={() => callback(id, color)}
            className={addShadow(idx)}
            key={id}
            data-type={color}
            style={{ backgroundColor: currentColor }}
          >
            {color}
          </li>
        );
      })}
    </ul>
  );
};

export default ColorBlock;
