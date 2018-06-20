import React from 'react'

const Notification = ({message}) => {
    if (message === null) {
        return null
    }
    return (
        <div className="pop-up">
            {message}
        </div>
    )
}

export default {Notification}