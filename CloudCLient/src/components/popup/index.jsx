import React from 'react'
import Input from '../Input'

export default function Popup() {
    return (
        <div className='popup'>
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
