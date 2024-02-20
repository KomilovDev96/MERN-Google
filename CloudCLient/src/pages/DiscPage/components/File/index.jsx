import React from 'react'

export default function File() {
    return (
        <div className='file'>
            <img src="" alt="" />
            <div className='file__name'></div>
            <div className='file__date'></div>
            <div className='file__size'></div>
            <button className="file__btn file__download">Dowloand</button>
            <button className="file__btn file__delete">Delete</button>
        </div>
    )
}
