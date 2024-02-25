import Popup from "@/components/popup";
import FileList from "./components/FileList";
import "./style.scss"
import { useDispatch } from "react-redux";
import { SetPopapDisplay } from "@/store/Features/File.slice";
import { useEffect, useState } from "react";
import { GetFiles } from "@/store/Features/File.slice";


const DiscPage = () => {
    const [curentDir, setcurnDir] = useState("65d447bcfcf64351c7bb093c")
    const dispatch = useDispatch()
    const showPopupHundler = () => {
        dispatch(SetPopapDisplay('flex'))
    }

    useEffect(() => {
        dispatch(GetFiles(curentDir))
    }, [])
    return (
        <div className="disk">
            <div className="disk__btns">
                <button className="disk__back">Назад</button>
                <button className="disk__create" onClick={() => showPopupHundler()}>Создать папку</button>
            </div>
            <FileList />
            <Popup />
        </div>
    )
};
export default DiscPage;