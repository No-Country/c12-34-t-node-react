import styles from './styles.module.css'
import LOGO from '../../../../assets/imgs/logoBlackTypo.png'
import Draggable, {DraggableCore} from "react-draggable";


const Horarios = () => {
  return (
    <div className={styles.container}>
      <div style={{
          display:'flex',
          width:'100%',
          maxWidth:'1600px',
          gap:'550px',
          alignItems:'center',
          // border:'3px solid orange',
          margin:'0 auto'
        }}>
          <h2 
            className='text-4xl text-black font-bold'
            style={{borderBottom:'2px solid',borderColor:'#5FCA56', paddingBottom:'10px', marginTop:'80px'}}>
            Horarios
          </h2>

          <span style={{maxHeight:'240px', maxWidth:'200px', alignSelf:'center'}}>
            <img style={{height:'100%', width:'100%'}} src={LOGO} alt="logotipo del gym" />
          </span>
        </div>


      <div className={styles.content}>
        <div className={styles.sidebar}>
          <div className={styles.hours}>
            <p>10:00</p>
            <p>11:00</p>
            <p>14:00</p>
            <p>15:00</p>
            <p>16:00</p>
            <p>17:00</p>
            <p>18:00</p>
            <p>19:00</p>
            <p>20:00</p>
          </div>
        </div>

        <div className={styles.wrapper}>
          <div className={styles.header}>
            <p>Lunes</p>
            <p>Martes</p>
            <p>Miércoles</p>
            <p>Jueves</p>
            <p>Viernes</p>
            <p>Sábado</p>
            <p>Domingo</p>
          </div>


          <div className={styles.classTimes}>
            <div className={styles.tenAM}>
              <Draggable>
              <div className={styles.box}>
                  Zumba
                  #Profe María
              </div>
              </Draggable>
              <Draggable>
              <div className={styles.box}>
                  <p>Zumba</p>
                  <p>#Profe María</p>
              </div>
              </Draggable>
              <Draggable>
              <div className={styles.box}>
                  <p>Zumba</p>
                  <p>#Profe María</p>
              </div>
              </Draggable>
            </div>

            <div className={styles.twoPM}>

              <Draggable>
              <div className={styles.box}>
                  <p>Spinning</p>
                  <p>#Profe Ro</p>
              </div>
              </Draggable>
              <Draggable>
              <div className={styles.box}>
                  <p>Spinning</p>
                  <p>#Profe Ro</p>
              </div>
              </Draggable>

              
              <Draggable>
              <div className={styles.customBox}>
                  <p>Zumba</p>
                  <span style={{color:'#F96B6B', fontSize:'.7rem', wordWrap:'break-word'}}>Suspendida del 7/4 al 19/4</span>
                  <p>#Profe María</p>
                  <span style={{position:'absolute', height:'12px', width:'12px', backgroundColor:'#F96B6B', borderRadius:'50%', top:'0', right:'0'}}></span>
              </div>
              </Draggable>
           
            </div>

            <div className={styles.threePM}>

              <Draggable>
              <div className={styles.box}>
                  <p>Yoga</p>
                  <p>#Profe Noe</p>
              </div>
              </Draggable>
              <Draggable>
              <div className={styles.box}>
                  <p>Yoga</p>
                  <p>#Profe Noe</p>
              </div>
              </Draggable>
           
            </div>

            <div className={styles.twoPM}>

              <Draggable>
              <div className={styles.box}>
                  <p>Yoga</p>
                  <p>#Profe Noe</p>
              </div>
              </Draggable>
              <Draggable>
              <div className={styles.box}>
                  <p>Yoga</p>
                  <p>#Profe Noe</p>
              </div>
              </Draggable>

            </div>

            <div className={styles.sixPM}>

              <Draggable>
              <div className={styles.box}>
                  <p>Crossfit</p>
                  <p>#Profe Ale</p>
              </div>
              </Draggable>
              <Draggable>
              <div className={styles.box}>
                  <p>Crossfit</p>
                  <p>#Profe Ale</p>
              </div>
              </Draggable>

            </div>

            <div className={styles.threePM}>

              <Draggable>
              <div className={styles.box}>
                  <p>Aerobox</p>
                  <p>#Profe Carla</p>
              </div>
              </Draggable>
              <Draggable>
              <div className={styles.box}>
                  <p>Aerobox</p>
                  <p>#Profe Carla</p>
              </div>
              </Draggable>

            </div>


          </div>
        </div>
      </div>
    </div>
  )
}

export default Horarios