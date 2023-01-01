import React from 'react'

type Props = {
  headerTitle:string;
}

const HeaderTitle = ({headerTitle}:Props) => {
  return (
    <div className='text-xl w-80'>{headerTitle}</div>
  )
}

export default HeaderTitle