import React from 'react'

const AccordianItem = ({ title, description, isOpen,setOpeIndex }) => {
    return (
        <div className='border border-black'>
            <div className='flex justify-between bg-slate-400 p-2' onClick={()=>setOpeIndex()}>
                <span>{title}</span>
                <span>arrow</span>
            </div>
            {isOpen && (
                <div>
                    <p>{description}</p>
                </div>
            )}
        </div>
    )
}

export default AccordianItem