import React from 'react'
import dirlogo from "@/assets/img/dir.svg"
import filelogo from "@/assets/img/file.svg"
import "./style.scss"
export default function File({ file }) {

    return (
        <div className='file'>
            <img src={file.type === 'dir' ? dirlogo : filelogo} alt="svg" />
            <div className='file__name'>{file.name}</div>
            <div className='file__date'>{file.date}</div>
            <div className='file__size'>{file.size}</div>
            <button className="file__btn file__download">Dowloand</button>
            <button className="file__btn file__delete">Delete</button>
        </div>
    )
}
