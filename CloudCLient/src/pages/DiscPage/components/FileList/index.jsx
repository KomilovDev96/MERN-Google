import React from 'react'
import File from '../File'
import "./style.scss"
export default function FileList() {
    return (
        <div className='filelist'>
            <div className="filelist__header">
                <div className="filelist__name">Название</div>
                <div className="filelist__date">Дата</div>
                <div className="filelist__size">Размер</div>
            </div>
            <File />
        </div>
    )
}
