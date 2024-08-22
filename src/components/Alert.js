import React from 'react'

export default function Alert(props) {
  return (
    <div style={{height: '50px'}}>
   { props.alert && <div style={{width: '96%', marginLeft: '25px'}} className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
       <strong>{props.alert.message}!</strong>
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>}
    </div>
  )
}
