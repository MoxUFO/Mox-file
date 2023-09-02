import React from 'react'
import Chip from '@mui/material/Chip';
import '../assests/css/TopLabel.css'


export default function TopLabel() {
    const handleClick = () => {
        console.log('clicked');
    }
  return (
    <div className='top-label'>
        <h2>Nelson Foster Jr</h2>
       <div className='chip'> <Chip label="Resume" onClick={handleClick}  /></div>
    </div>
  )
}
