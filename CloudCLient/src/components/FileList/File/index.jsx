import React from 'react'
import FileSVG from '@/assets/img/file.svg'
import DirSVG from '@/assets/img/dir.svg'
import "./style.scss"
export default function File() {
    return (
        <div className='file'>
            <img src={FileSVG} alt="" />
            <img src={DirSVG} alt="" />
        </div>
    )
}
