import React, { ReactNode } from 'react';
interface Props {
  children: ReactNode;
}
export const Card: React.FC<Props> = ({ children }) => {
  return <div className=" bg-white my-5">{children}</div>;
};
