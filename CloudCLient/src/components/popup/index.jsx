import React from 'react'
import Input from '../Input'
import { useSelector } from 'react-redux'

export default function Popup() {
    const popupDisplay = useSelector(state => state.file.popupDisplay)
    return (
        <div className='popup' style={{ display: popupDisplay }}>
            <div className='popup__content'>
                <div className='popup__header'>
                    <div className='popup_title'>Создать папку</div>
                    <button>X</button>
                </div>
                <Input />
                <button className='popup__create'> Создать </button>
            </div>
        </div>
    )
}
