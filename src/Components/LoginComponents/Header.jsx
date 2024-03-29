import React from 'react';
import { Link } from 'react-router-dom';


function Header({ heading, paragraph, linkName, linkUrl = '#' }) {
    return (
        <div className='Header-div'> 
            <div className='Header'>
                {/* <img className='header-img'
                    alt=''
                    src='https://ik.imagekit.io/pibjyepn7p9/Lilac_Navy_Simple_Line_Business_Logo_CGktk8RHK.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649962071315'/> */}
            </div>
            <h2 className='heading'>{heading}</h2>
            <p className='paragraph'>
                {paragraph} <Link to={linkUrl} className='link'>{linkName}</Link>
            </p>
        </div>
    );
}

export default Header;
