import { Section, Hero, Carrusel, Cards } from '../../componentes/index'
import AdminPage from '../../componentes/AdminPage'



const Landing = () => {

  return (

<>

    <Section>
      <Hero />
    </Section>

    <Section>
      <Carrusel />
    </Section>

    <Section>
      <Cards />
    </Section>

    <Section>
       <AdminPage/>
    </Section>


</>
      

  )
}

export default Landing