import { Section, Hero, Header, Footer, Carrusel, Cards } from '../../componentes/index'


const Landing = () => {

  return (

    <div style={{
      border: '1px solid',
      backgroundColor: 'white',
      color: 'black',
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      gap:'80px',
      width:'100%',
      maxWidth:'2300px'
    }}>
    
      <Header />

    <Section>
      <Hero />
    </Section>

    <Section>
      <Carrusel />
    </Section>

    <Section>
      <Cards />
    </Section>
    
      <Footer />

      
    </div>
  )
}

export default Landing