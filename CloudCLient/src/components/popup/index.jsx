import React from 'react'
import Input from '../Input'
import { useDispatch, useSelector } from 'react-redux'
import { SetPopapDisplay } from '@/store/Features/File.slice'

export default function Popup() {
    const popupDisplay = useSelector(state => state.file.popupDisplay)
    const dispatch = useDispatch()
    const hidePopupHundler = () => {
        dispatch(SetPopapDisplay('none'))
    }
    return (
        <div className='popup' style={{ display: popupDisplay }}>
            <div className='popup__content'>
                <div className='popup__header'>
                    <div className='popup_title'>Создать папку</div>
                    <button onClick={() => hidePopupHundler()}>X</button>
                </div>
                <Input />
                <button className='popup__create'> Создать </button>
            </div>
        </div>
    )
}
