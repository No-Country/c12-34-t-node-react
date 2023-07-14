import styles from "./styles.module.css";
import {Link, useNavigate } from "react-router-dom";

const SideMenu = ({ isOpen}) => {

  const navigate = useNavigate()
  
  const token = sessionStorage.getItem("userToken")

  return (


    <div 
      style={{ right: isOpen ? 0 : -250 }}
      className={styles.container}
    >
      <nav className={styles.navMenu}>
        <a href="#galeria">Galería</a>
        <a href="#colaboradores">Colaboradores</a>
        <a href="#contacto">Contacto</a>
        { !!token &&          
          <Link to='/home/admin'> Administrador</Link>
        }
      </nav>

      { token === null
        ? <div style={{textAlign:'center'}} className={styles.login}>
            <button onClick={() => navigate('/login')}>Ingresar</button>
          </div>
        : <div style={{textAlign:'center'}} className={styles.login}>
            <button onClick={() => {
              sessionStorage.clear('userToken')
              navigate('/')
              }}>
                Salir
            </button>
          </div>
      }

    </div>
  

  );
};

export default SideMenu;