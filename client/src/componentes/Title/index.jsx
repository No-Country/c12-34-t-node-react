
import Logo from "./assets/FitnessCenterLogoGym.png"

const Title = ({ title }) => {
  return (
    <>
      <header className='flex justify-center items-center'>
        <img className='w-32 ' src={Logo} alt="FitnessCenterLogoGym logo de la marca y aplicación web Fitness Center" />
      </header>
      <h3 className='self-start text-2xl font-PoppinsBold border-b-2 border-spacing-14 border-pallete-green inline'>
        {title}
      </h3>
    </>
  )
}

export default Title

