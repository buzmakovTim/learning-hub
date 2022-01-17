import React, { useState } from 'react';
import Star from '../Star/Star';

type RatingPropsType = {
  value: 0 | 1 | 2 | 3 | 4 | 5; // we don't use it
};

export const Rating: React.FC<RatingPropsType> = ({ value }) => {
  
  let [valueToChange, setValue] = useState<number>(value);

  function changeRating(starSelected: number) {
    valueToChange === starSelected
      ? setValue(starSelected - 1)
      : setValue(starSelected);
  }

  return (
    <div>
      <Star
        selected={valueToChange > 0}
        starSelected={1}
        changeRating={changeRating}
      />
      <Star
        selected={valueToChange > 1}
        starSelected={2}
        changeRating={changeRating}
      />
      <Star
        selected={valueToChange > 2}
        starSelected={3}
        changeRating={changeRating}
      />
      <Star
        selected={valueToChange > 3}
        starSelected={4}
        changeRating={changeRating}
      />
      <Star
        selected={valueToChange > 4}
        starSelected={5}
        changeRating={changeRating}
      />
    </div>
  );
};

export default Rating;
