import React from 'react';
import "./Footer.css"
const Footer = () => {
  return (
    <footer>
        {/* copyright */}
        <div className='footer-cpyright'>
            <p>© 2023 main--mehulkapoor.netlify.app</p>
        </div>
        {/* Social */}
         <ul className='footer-social-media'>
            <li>
                <a href='https://github.com/Mehul-kapoor-21' target='_blank' rel="noreferrer">
                <i class="fa-brands fa-github"></i>
                </a>
            </li>
            <li>
            <a href='https://www.instagram.com/__mehulkapoor__/' target='_blank' rel="noreferrer">
                    <i className='fa-brands fa-instagram'></i>
                </a>
            </li>
            <li>
            <a href='https://www.linkedin.com/in/mehul-kapoor-ba1956226/' target="_blank" rel="noreferrer">
                    <i className='fa-brands fa-linkedin'></i>
                </a>
            </li>
         </ul>
    </footer>
  )
}

export default Footer