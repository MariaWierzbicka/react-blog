import styles from './Footer.module.scss';

const Footer = () => {

  return (
    <div className={`text-center text-muted ${styles.footer}`}>
    <p>Copyright ©BlogApp 2022</p>
    </div>
  )
}
export default Footer;