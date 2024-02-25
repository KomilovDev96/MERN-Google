import React from 'react'
import File from '../File'
import "./style.scss"
import { useSelector } from 'react-redux'
export default function FileList() {

    const files = useSelector(state => state.file.files)
    return (
        <div className='filelist'>
            <div className="filelist__header">
                <div className="filelist__name">Название</div>
                <div className="filelist__date">Дата</div>
                <div className="filelist__size">Размер</div>
            </div>
            {files.map((item, index) => (
                <File file={item} key={index} />
            ))}
        </div>
    )
}
