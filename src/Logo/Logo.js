import React from 'react';
// import Tilt from 'react-tilt';
import './logo.css';
import brain from './brain.png';


export const Logo = () => {
return (
<div className='logo ma4 mt0'>
	<img src={brain} alt='logo'></img>
{/* <Tilt className="Tilt br2 shadow-2 " options={{ max : 25 }} style={{ height: 150, width: 150 }} >
 <div className="Tilt-inner"> 👽 </div>
</Tilt> */}
</div>
)
}