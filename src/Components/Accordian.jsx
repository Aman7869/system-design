import React, { useState } from 'react'
import AccordianItem from './AccordianItem'

const accordianData = [
    {title: "Accordian 1", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis iste, ipsam voluptate corrupti nostrum dolorum fuga itaque quisquam nam veritatis qui minima, architecto beatae nihil porro eum dolores iure? Incidunt."
    },
    {title: "Accordian 2", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis iste, ipsam voluptate corrupti nostrum dolorum fuga itaque quisquam nam veritatis qui minima, architecto beatae nihil porro eum dolores iure? Incidunt."
    },
    {title: "Accordian 3", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis iste, ipsam voluptate corrupti nostrum dolorum fuga itaque quisquam nam veritatis qui minima, architecto beatae nihil porro eum dolores iure? Incidunt."
    },
]
const Accordian = () => {
    const [showIndex, setShowIndex] = useState(0)
  return (
    <div className='w-[50%] m-auto mt-2'>
        {
            accordianData?.map((item, index)=> <AccordianItem key={index} title={item.title} description={item.description} isOpen={showIndex === index}
            setOpeIndex = {()=> showIndex === index ? setShowIndex(null) :setShowIndex(index)}
            />)
        }
    </div>
  )
}

export default Accordian