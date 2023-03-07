import styles from './Footer.module.css'
import {SocialIcon} from "react-social-icons";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
          Mikaël Hubert-Deschamps - HUBM2601
          <div className={'logos'}>
              <SocialIcon url={'https://github.com/MikaelHD/IGE511-TP1-HUBM2601'}></SocialIcon>
              <SocialIcon url={'https://www.linkedin.com/in/mika%C3%ABl-hubert-deschamps-738a53199/'}></SocialIcon>
              <SocialIcon url={'https://www.instagram.com/mamadou_hd/'}></SocialIcon>
              <SocialIcon url={'mikael.hubert-deschamps@usherbrooke.ca'}></SocialIcon>
          </div>
      </footer>
    </>
  )
}
