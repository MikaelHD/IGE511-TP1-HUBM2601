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
              <SocialIcon url={'https://www.youtube.com/channel/UCqae8q81SHC511yHCsJJk4Q'}></SocialIcon>
              <SocialIcon url={'mailto:mikael.hubert-deschamps@usherbrooke.ca'}></SocialIcon>
              <SocialIcon url={'https://open.spotify.com/user/mickeeymouuuse?si=cd811e0922444dd7'}></SocialIcon>
              <SocialIcon url={'https://www.google.com/search?q=hwygowerhsdf+site%3A.*tp1ige511.com&oq=&aqs=edge.1.69i60j69i59j0i131i433i512j69i59j69i57j0i433i512j69i60l3.1848j0j1&sourceid=chrome&ie=UTF-8'}></SocialIcon>
          </div>
      </footer>
    </>
  )
}
