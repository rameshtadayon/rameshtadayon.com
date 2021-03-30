import React from 'react';
import headerimage from './header1.jpeg';

console.log(headerimage);

function HomepageImage() {
    return (
    <img src={headerimage} style={{maxWidth:'100%', opacity:'0.7'}} alt='Photo of myself and my boyfriend in Turkey' />
  );
}

export default HomepageImage;