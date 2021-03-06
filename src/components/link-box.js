import React from 'react';

const LinkBox = ({ linkUrl, title, description, siteImgUrl }) => (
  // <Link className='header-btn btn link-white' to={linkUrl}>{title}</Link>
  <a className='link-box' href={linkUrl} target='_blank' rel='noreferrer'>
      <h3 className='link-title'>
        <img src={siteImgUrl} alt={title}></img>
        {title}
      </h3>
      <div>{description}</div>
  </a>
)

export default LinkBox
