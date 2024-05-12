import React from 'react'
import { AppContext } from './AppContext'

const Completed = () => {
  const {Completed}=React.useContext(AppContext)
  const mapcom=()=>{
    return Completed.map((item,index)=>(
        <div key={index} className='list-item'>
            <p className='item'>{item}</p>
        </div>
    ))
}
  return (
    <div>
      {(Completed.length>0)
                    && mapcom()
                }
    </div>
  )
}

export default Completed
