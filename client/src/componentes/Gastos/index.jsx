import Title from '../Title'
import iconDelete from "../../assets/imgs/cell.png"
import iconEdit from "../../assets/imgs/lapizicon.png"
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

import ChartComponent from './Grafico'
import ModalGastos from './Modal'
import ModalDos from './ModalDos'
import { Grid } from '@mui/material'

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein }
}

const rows = [
  createData('Alquiler', "$43.000",),
  createData('Luz', "$400.000",),
  createData('Gas', "$400.000",),
  createData('Agua', "$400.000",),
  createData('Tasa', "$400.000",),
  createData('Habilitacion', "$400.000"),
]

const ingresos = [
  createData('Cuotas'),
  createData('Cuota', "$400.000",),
  createData('Cuota', "$400.000",),
  createData('Cuota', "$400.000",),
  createData('Cuota', "$400.000",),
  createData('Cuota', "$400.000",),
]

const Gastos = () => {

  return (
    <main className='flex flex-col w-full gap-2 m-5'>
      <Title title={'Gastos'} />
      <div className='w-fit h-1/2 mx-auto'>
        <Grid container alignItems='center' justifyContent='start'>
          <Grid item xs={12} md={6}>
            <ChartComponent />
          </Grid>
        </Grid>
      </div>

      <div className='w-full'>
        <Grid container alignItems={'center'}>
          <Grid item xs={11} md={6}>
            <TableContainer>
              <Table size='small' aria-label='a dense table'>
                <TableHead>
                  <TableRow>
                    <TableCell><p className=' text-pallete-blue font-PoppinsSemibold text-lg whitespace-nowrap'>Gastos Mensuales</p></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <TableCell component='th' scope='row'>
                        <p className=' text-pallete-black font-PoppinsMedium'>{row.name}</p>
                      </TableCell>
                      <TableCell align='right'><p className=' text-pallete-grey font-PoppinsMedium '>{row.calories}</p></TableCell>
                      <TableCell><img src={iconEdit} className='w-[30px] p-0 cursor-pointer'></img></TableCell>
                      <TableCell><img src={iconDelete} className='w-[30px] p-0 cursor-pointer'></img></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className='text-center mt-[20px]'>
                <ModalGastos title={'Agregar Gastos Mensuales'} />
              </div>
            </TableContainer>
          </Grid>

          <Grid item xs={11} md={6}>
            <TableContainer>
              <Table size='small' aria-label='a dense table'>
                <TableHead>
                  <TableRow>
                    <TableCell><p className=' text-pallete-blue font-PoppinsSemibold text-lg whitespace-nowrap'>Ingresos Mensuales</p></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {ingresos.map((row) => (
                    <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <TableCell component='th' scope='row'>
                        <p className=' text-pallete-black font-PoppinsMedium'>{row.name}</p>
                      </TableCell>
                      <TableCell align='right'> <p className=' text-pallete-green font-PoppinsMedium '>{row.calories}</p> </TableCell>
                      <TableCell className='text-right w-fit'><img src={iconEdit} className='w-[30px] p-0 cursor-pointer'></img></TableCell>
                      <TableCell className='text-right w-fit'><img src={iconDelete} className='w-[30px] p-0 cursor-pointer'></img></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className='text-center mt-[20px]'>
                <ModalDos />
              </div>
            </TableContainer>
          </Grid>
        </Grid>
      </div>
    </main>
  )
}

export default Gastos