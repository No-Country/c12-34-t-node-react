import Title from '../Title'
import iconDelete from "../../img/delete.png"
import iconEdit from "../../img/edit.png"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import ChartComponent from './Grafico';
import ModalGastos from './Modal';
import ModalDos from './ModalDos';
import { Grid } from '@mui/material';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Alquiler', "$43.000", ),
  createData('Luz', "$400.000", ),
  createData('Gas', "$400.000", ),
  createData('Agua', "$400.000", ),
  createData('Tasa', "$400.000", ),
  createData('Habilitacion', "$400.000"),
];

const ingresos = [ 
  createData('Cuotas' ),
  createData('Cuota', "$400.000", ),
  createData('Cuota', "$400.000", ),
  createData('Cuota', "$400.000", ),
  createData('Cuota', "$400.000", ),
  createData('Cuota', "$400.000", ),
]

const Gastos = () => {
  
  return (
    <div className='mx-auto h-full'>
      <div className='mt-[20px]'>
        <Title title={'Gastos'} />
      </div>

      <div className='sm:mx-auto md:float-right'>
        <Grid container alignItems='center' justifyContent='flex-end'>
          <Grid item xs={12} md={6}>
            <ChartComponent />
          </Grid>
        </Grid>
      </div>

      <Grid container spacing={2} justifyContent='center'>
  <Grid item xs={12} md={6}>
    <TableContainer>
      <Table sx={{ minWidth: 100 }} size='small' aria-label='a dense table'>
        <TableHead>
          <TableRow>
            <TableCell style={{ color: 'blue' }}>Gastos Mensuales</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component='th' scope='row'>
                {row.name}
              </TableCell>
              <TableCell align='right'> <b>{row.calories}</b>  </TableCell>
              <TableCell className='text-right'><img src={iconEdit} className='w-[15px] h-[15px] cursor-pointer'></img></TableCell>
              <TableCell className='text-right'><img src={iconDelete} className='w-[15px] h-[15px] cursor-pointer'></img></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className='text-center mt-[20px]'>
        <ModalGastos title={'Agregar Gastos Mensuales'} />
      </div>
    </TableContainer>
  </Grid>

  <Grid item xs={12} md={6}>
    <TableContainer className='mb-5'>
      <Table sx={{ minWidth: 100 }} size='small' aria-label='a dense table'>
        <TableHead>
          <TableRow>
            <TableCell style={{ color: 'blue', whiteSpace: 'nowrap' }}>Ingresos Mensuales</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ingresos.map((row) => (
            <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component='th' scope='row'>
                {row.name}
              </TableCell>
              <TableCell align='right'> <b className='text-teal-400'>{row.calories}</b> </TableCell>
              <TableCell className='text-right'><img src={iconEdit} className='w-[15px] h-[15px] cursor-pointer'></img></TableCell>
              <TableCell className='text-right'><img src={iconDelete} className='w-[15px] h-[15px] cursor-pointer'></img></TableCell>
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
  )
}

export default Gastos;