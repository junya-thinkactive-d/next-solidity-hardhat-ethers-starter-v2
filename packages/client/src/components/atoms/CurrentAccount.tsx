import React from 'react';

type Props = {
  currentAccount: string;
};

const CurrentAccount = ({ currentAccount }: Props) => {
  return (
    <div className='flex justify-end'>
      <div className='rounded-bl-lg text-right p-2 bg-stone-900 text-white'>
       Current Account: {currentAccount}
      </div>
    </div>
  );
};

export default CurrentAccount;
