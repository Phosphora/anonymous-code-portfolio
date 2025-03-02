import '../sass/PiedDePage.scss'
import { texteFooter } from '../code/textes';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export default function PiedDePage({langue}) {
  return (
    <footer className='PiedDePage'>
      <section className="contact">
        <div className="contact-texte">
        <h1>{texteFooter[langue].titre}</h1>
        <p>{texteFooter[langue].p}</p>
        </div>
        <div className="medias-sociaux">
            <a href="https://github.com/Phosphora" target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon/></a>
            <a href="http://www.linkedin.com/in/winnie-li-3b704b232" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon/></a>
        </div>
      </section>
      <section className="adresse-courriel">
        <MailOutlineIcon/>
        <a href="mailto:winnieli535@gmail.com">winnieli535@gmail.com</a>
      </section>
    </footer>
  );
}