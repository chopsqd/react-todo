import React from 'react'

export const Alert = ({alert}) => {
    if(!alert) return null

    return (
        <div className={`alert alert-${alert.type || 'warning'} alert-dismissible`}>
            <strong>Внимание!</strong>
            {alert.text}
            <button type="button" className="btn-close" aria-label="Close">&times;</button>
        </div>
    )
}



