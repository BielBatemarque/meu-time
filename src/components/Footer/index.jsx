import './Footer.css';
import { FaInstagram  } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { MdPerson } from 'react-icons/md';
import { FaFutbol } from 'react-icons/fa';

export const Footer = () => {
    return(
        <footer className='footer'>
            <h2 className='footer-title'>Meu-Time</h2>
            
            <p>&copy; Todos os Diretitos reservados a Gabriel Batemarque</p>
            <div className="bola">

                <FaFutbol className='bola'/>
            </div>
            <div className='lista-redes-sociais'>
                <ul>
                <li>
                    <a href="https://www.instagram.com/bielbatemarque/" target='_blank'>
                        <FaInstagram className='icon' />
                    </a>
                </li>
                    <li>
                        <a href="https://github.com/BielBatemarque" target='_blank'>
                            <FaGithub className='icon'/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/gabriel-batemarque/" target='_blank'>
                            <FaLinkedin className='icon'/>
                        </a>
                    </li>
                    <li>
                        <a href="https://gabrielbatemarque.vercel.app/" target='_blank'>
                            <MdPerson className='icon'/>
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}