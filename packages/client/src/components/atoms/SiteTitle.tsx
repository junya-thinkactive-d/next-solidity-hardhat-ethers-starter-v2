import React from 'react'

type Props = {
  siteTitle:string;
}

const SiteTitle = ({siteTitle}:Props) => {
  return (
    <div>{siteTitle}</div>
  )
}

export default SiteTitle