import { useEffect } from "react";
import styles from "./styles.module.css";
import {useLocation, useNavigate } from "react-router-dom";

const SideMenu = ({ isOpen, close }) => {

  const navigate = useNavigate()
  const {pathname} = useLocation()  


  useEffect(() => {
    if (isOpen) {
      close()
    }
  }, [pathname])


  return (
    <div 
      style={{ right: isOpen ? 0 : -250 }}
      className={styles.container}
    >
      <nav className={styles.navMenu}>
        <a href="#galeria">Galería</a>
        <a href="#colaboradores">Colaboradores</a>
        <a href="#contacto">Contacto</a>
      </nav>

      <button className={styles.login} onClick={() => {
        navigate('/login')
    }}> Ingresar</button>
    </div>
  

  );
};

export default SideMenu;