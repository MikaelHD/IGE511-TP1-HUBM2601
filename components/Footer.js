import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        Made with <img src="/netliheart.svg" alt="Netlify Logo" className={styles.logo} /> for you
          (In reality, it was made for IGE511 purposes, but anyway) - hwygowerhsdf !!
      </footer>
    </>
  )
}
