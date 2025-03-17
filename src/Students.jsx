import React from 'react'

const Students = (props) => {
  const {name,id} = props
  return (
    <div>
        <h6>{`Name:${name} ID:${id}`}</h6>
    </div>
  )
}
export default Students