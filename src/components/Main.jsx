import React, { useEffect, useState } from 'react'

import DragNDrop from './DragNDrop'

const defaultData = [
  { title: 'group 1', items: ['1', '2', '3'] },
  { title: 'group 2', items: ['4', '5'] },
  { title: 'group 3', items: ['6', '7', '9'] },
]
console.log(defaultData)

function Main() {
  const [data, setData] = useState()
  useEffect(() => {
    if (false) {
      console.log(localStorage.getItem('List'))
      setData(JSON.parse(localStorage.getItem('List')))
    } else {
      setData(defaultData)
    }
  }, [setData])
  return (
    <div className=''>
      <header className='Main-header'>
        <DragNDrop data={data} />
      </header>
    </div>
  )
}

export default Main
