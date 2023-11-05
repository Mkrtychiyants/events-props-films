import React from 'react';
import { Star } from '../Star/Star'
import { type } from '@testing-library/user-event/dist/type';

type TCountProps = {
  count: number
}

export const Stars = ({ count }: TCountProps) => {
  if ((typeof count !== "number") || (count < 1) || (count > 5)) {
    throw new Error("Check input data!")
  }
  const listB = [];
  for (let index = 0; index < count; index++) {
    listB.push(<Star key={index} />);
  }
  return (
    <ul className="card-body-stars u-clearfix">
      {listB.map(i => { return i })}
    </ul>
  )
}

Stars.defaultProps = {
  count: 0
}