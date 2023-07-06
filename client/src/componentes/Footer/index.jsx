import Logo from '../Footer/FooterUI.png'
import {AiOutlineCopyrightCircle, AiFillInstagram} from 'react-icons/ai'
import {FaLocationDot} from 'react-icons/fa6'
import {BsFillTelephoneFill, BsFacebook} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'






const Footer = () => {
  return (
    <footer style={{display:'flex', width:'100%', maxWidth:'2000px', height:'100%', alignItems:'center'}} className="footer p-10 bg-neutral text-neutral-content bg-white">
  <div style={{display: 'flex', justifyContent:'space-between' ,maxHeight:'300px', width:'100%', maxWidth:'2000px'}}>
    <div style={{display:'flex', flexDirection:'column', width:'100%', maxWidth:'300px', alignItems:'center'}}>
      <img style={{
        width:'100%',
        maxWidth:'150px',
        height:'100%',
        maxHeight:'230px',
        backgroundColor:'white',
        marginLeft:'12px'
      }} src={Logo} alt="footerLogo" />
      
      <p>Fitness Center Gym</p>
        
      <p style={{display:'flex', alignItems:'center', gap:'5px'}}>Copyright <AiOutlineCopyrightCircle style={{marginTop:'2px'}} />2023 </p>
    </div>

  

    <div style={{display:'flex', width:'100%', maxWidth:'200px', flexDirection:'column', marginTop: '20px'}}>

      <div style={{height:'100px', display:'flex', flexDirection:'column', gap:'5px', marginBottom:'-10px'}}>
        <span style={{color:'black', fontSize:'1rem'}} className="footer-title">Nuestras redes</span> 
          <div style={{marginLeft:'8px'}} className="grid grid-flow-col">
            <a style={{display:'flex', alignItems:'center', gap:'3px', cursor:'pointer'}} ><IoLogoWhatsapp size={20} /></a>
            <a style={{display:'flex', alignItems:'center', gap:'3px', cursor:'pointer'}} ><AiFillInstagram size={20}/></a>
            <a style={{display:'flex', alignItems:'center', gap:'3px', cursor:'pointer'}} ><BsFacebook size={18}/></a>
          </div>
      </div>

      <div style={{display:'flex', flexDirection:'column'}}>
        <span style={{color:'black', fontSize:'1rem'}} className="footer-title">Contacto</span> 
          <div  className="grid grid-flow-row gap-2">
            <a style={{display:'flex', alignItems:'center', gap:'4px'}} ><FaLocationDot /> Cerrito 239, C.A.B.A</a>
            <a style={{display:'flex', alignItems:'center', gap:'4px'}} ><BsFillTelephoneFill /> 5493-4993</a>
            <a style={{display:'flex', alignItems:'center', gap:'4px'}} ><FaLocationDot /> Cerrito 239, C.A.B.A</a>
          </div>
        </div>
    </div>
  </div> 
</footer>
  )
}

export default Footer