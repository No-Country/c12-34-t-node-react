import { Link } from "react-router-dom";

const NotFound = () => {


  return (
    <div style={{
      display: 'flex',
      width: '100%',
      height:'calc(100vh - 310px)',
      flexGrow: 1,
      justifyContent:'center',
      alignItems: 'center',
      backgroundColor:'white'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifySelf: 'center',
        alignItems: 'center',
        rowGap: 20,
      }}>
        <p style={{fontSize:'2.8rem'}}>
          {'No se puede encontrar esa página'}
        </p>

        <p style={{fontSize:'1.25rem', color:'#777'}} >
          {'No pudimos encontrar la página que estas buscando.'}
        </p>

        <Link to='/'>
          Ir al inicio
        </Link>
      </div>
    </div>
  );
};

export default NotFound;