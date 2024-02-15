import React from 'react'
import "./style.scss"
import File from './File'
export default function FileList() {
    return (
        <div>
            <div className='filelist'>
                <div className="filelist__header">
                    <div className="filelist__name">Название</div>
                    <div className="filelist__date">Дата</div>
                    <div className="filelist__size">Размер</div>
                </div>
            </div>
            <File />
        </div>
    )
}
