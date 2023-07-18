
import Title from '../Title'
import iconDelete from "../../img/delete.png"
import iconEdit from "../../img/edit.png"
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ChartComponent from './Grafico';
import ModalGastos from './Modal';
import ModalDos from './ModalDos';





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
  createData('Cuota', "$400.000", )
]


const Gastos = () => {
  return (
    <div>
        <div className='mt-[20px]'>
          <Title title={"Gastos"}/>
        </div>

        <div className='mr-[120px]' style={{float:"right"}}>
            <div className='flex'>
              
                <p className='text-orange-600 mt-[100px] mr-[100px]'><b>Pendiente</b> </p>
              
             
               <ChartComponent/>
              
          
          </div>
      
        </div>

        <div className='flex mt-[150px] xxxxl:flex xxxl:flex xxl:flex xl:flex lg:flex md:flex sm:flex xxs:flex xxxs:inline-block' >
          <div className='mt-[150px] ml-[100px]'>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                      <TableRow>
                        <TableCell  style={{color:"blue"}}>Gastos Mensuales</TableCell>
                      </TableRow>
                     </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow  key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                            <TableCell component="th" scope="row">
                               {row.name}
                            </TableCell>
                          <TableCell align="right"> <b>{row.calories}</b>  </TableCell>
                          <TableCell align="right"><img src={iconEdit} className='w-[15px] h-[15px] cursor-pointer'></img></TableCell>
                          <TableCell align="right"><img src={iconDelete} className='w-[15px] h-[15px] cursor-pointer'></img></TableCell>
                     </TableRow> ))}
                  </TableBody>
             </Table>
          </TableContainer>
             <div className='text-center mt-[20px]'>
             <ModalGastos title={"Agregar Gastos Mensuales"}/>
             </div>
          </div>
          
          <div className='ml-[50px] mt-[178px]'>
          <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                      <TableRow>
                        <TableCell style={{color:"blue"}}>Ingresos Mensuales</TableCell>
                      </TableRow>
                     </TableHead>
                    <TableBody>
                      {ingresos.map((row) => (
                        <TableRow  key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                            <TableCell component="th" scope="row">
                               {row.name}
                            </TableCell>
                          <TableCell align="right"> <b className='text-teal-400'>{row.calories}</b> </TableCell>
                          <TableCell align="right">{row.fat}</TableCell>
                          <TableCell align="right"><img src={iconEdit} className='w-[15px] h-[15px] cursor-pointer'></img></TableCell>
                          <TableCell align="right"><img src={iconDelete} className='w-[15px] h-[15px] cursor-pointer'></img></TableCell>
                     </TableRow> ))}
                  </TableBody>
             </Table>
          </TableContainer>
          <div  className='text-center mt-[20px]'>
            <ModalDos/>
             </div>
          </div>
        </div>

      

          
    </div>
  )
}

export default Gastos
