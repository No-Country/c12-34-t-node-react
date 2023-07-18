import React from 'react'
import Title from '../Title'
import iconDelete from "../../img/delete.png"
import iconEdit from "../../img/edit.png"

const Gastos = () => {
  return (
    <div>
        <div>
        <Title title={"Gastos"}/>
        </div>

         <div className='mt-[140px] ml-[200px]'>

         <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    
    <tbody>
      {/* row 1 */}
      <tr>
        
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <img src={iconEdit} className=''></img>
        <img src={iconDelete}  className='w-[15px] h-[15px] ml-[20px]'></img  >
      </tr>
      {/* row 2 */}
      <tr className="hover">
        
       
      <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <img src={iconEdit}  className='w-[15px] h-[15px]'></img>
        <img src={iconDelete}  className='w-[15px] h-[15px]'></img >
      </tr>
      {/* row 3 */}
      <tr>
       
       
      <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <img src={iconEdit}  className='w-[15px] h-[15px]'></img>
        <img src={iconDelete}  className='w-[15px] h-[15px]'></img >
      </tr>
    </tbody>
  </table>
</div>
           
             
         </div>
    </div>
  )
}

export default Gastos
