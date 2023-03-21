import React from 'react'
import './css/footer.css'
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
        <div>
            <p>Copyright © 2023 Otoniel Emanuel</p>
        </div>
        <ul className='socialMidia'>
            <li><a href="https://github.com/otonielemanuel" target="_blank"><FaGithub/></a></li>
            <li><a href="https://www.linkedin.com/in/otoniel-emanuel-b80727261/" target="_blank"><FaLinkedinIn/></a></li>
            <li><a href="https://www.instagram.com/eusouootis_/" target="_blank"><FaInstagram/></a></li>
        </ul>
    </footer>
  )
}
