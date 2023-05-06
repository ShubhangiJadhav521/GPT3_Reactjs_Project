import React from 'react'
import './Brand.css';
import google from '../../Assets/google.png';
import atlassian from '../../Assets/atlassian.png';
import shopify from '../../Assets/shopify.png';
import slack from '../../Assets/slack.png';
import dropbox from '../../Assets/dropbox.png'

const Brand = () => {
  return (
    <div className="gpt3__brand section__padding">
    <div>
      <img src={google} className='img' />
    </div>
    <div>
      <img src={slack} className='img'/>
    </div>
    <div>
      <img src={atlassian} className='img'/>
    </div>
    <div>
      <img src={dropbox} className='img'/>
    </div>
    <div>
      <img src={shopify}className='img' />
    </div>
  </div>
  )
}

export default Brand