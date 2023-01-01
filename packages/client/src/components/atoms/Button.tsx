import React from 'react';

type Props = {
  buttonName: string;
  handleButtonOnClick: () => void;
  className?: string;
};

const Button = ({ buttonName, handleButtonOnClick, className }: Props) => {
  const classes: string[] = [];

  className && classes.push(className);

  return (
    <>
      <button className={classes.join(' ')} onClick={handleButtonOnClick}>
        {buttonName}
      </button>
    </>
  );
};

export default Button;
