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
import axios from "axios"
const { VITE_BACKEND_URL } = import.meta.env
import { useEffect, useState } from 'react';

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

  const [gastos, setGastos] = useState([])
  const [totalGastado, setTotalGastado] = useState([])
  const [ingresos, setIngresos] = useState([])

  const incorporateExpense = (x) => { 
    setGastos((prevGastos) => [...prevGastos, x]);
  }

  const incorporateIncome = (x) => { 
    setIngresos((prevIncomes) => [...prevIncomes, x]);
  }
  
     
  useEffect(() => { 
   axios.get(`${VITE_BACKEND_URL}/api/expenses`) 
        .then((res) => { 
          console.log(res.data.expenses)
          setGastos(res.data.expenses)
          console.log(res.data.gastos)
          setTotalGastado(res.data.gastos)
        })
        .catch((err) => console.log(err))
 }, [])

 useEffect(() => { 
  axios.get(`${VITE_BACKEND_URL}/api/income`) 
       .then((res) => { 
         setIngresos(res.data)   
       })
       .catch((err) => console.log(err))
}, [])

const getTotalIncome = () => {
  return ingresos.reduce((total, row) => total + parseInt(row.income), 0);
};
 
 
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
          {gastos.map((gasto) => (
            <TableRow key={gasto.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component='th' scope='row'>
                {gasto.name}
              </TableCell>

              <TableCell align='right'> <b>{gasto.expense}</b>  </TableCell>
              <TableCell className='text-right'><img src={iconEdit} className='w-[15px] h-[15px] cursor-pointer'></img></TableCell>
              <TableCell className='text-right'><img src={iconDelete} className='w-[15px] h-[15px] cursor-pointer'></img></TableCell>
            </TableRow>
         
          ))}
        </TableBody>
        <TableBody>
        <TableRow>
    <TableCell component='th' scope='row'>
      <b>Total</b>
    </TableCell>
    <TableCell align='right'>
      <b>{totalGastado}</b>
    </TableCell>
    <TableCell className='text-right'></TableCell>
    <TableCell className='text-right'></TableCell>
  </TableRow>
        </TableBody>
      </Table>
      <div className='text-center mt-[20px]'>
        <ModalGastos title={'Agregar Gastos Mensuales'} setGastoNuevo={incorporateExpense} />
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
              <TableCell align='right'> <b className='text-teal-400'>{row.income}</b> </TableCell>
              <TableCell className='text-right'><img src={iconEdit} className='w-[15px] h-[15px] cursor-pointer'></img></TableCell>
              <TableCell className='text-right'><img src={iconDelete} className='w-[15px] h-[15px] cursor-pointer'></img></TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableBody>
        <TableRow>
    <TableCell component='th' scope='row'>
      <b>Total</b>
    </TableCell>
    <TableCell align='right'>
     <b>{getTotalIncome()}</b> 
    </TableCell>
    <TableCell className='text-right'></TableCell>
    <TableCell className='text-right'></TableCell>
  </TableRow>
        </TableBody>
      </Table>
      <div className='text-center mt-[20px]'>
        <ModalDos setIncomeNuevo={incorporateIncome}/>
      </div>
    </TableContainer>
  </Grid>
</Grid>


    </div>
  )
}

export default Gastos;