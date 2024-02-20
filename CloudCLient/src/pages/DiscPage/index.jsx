import Popup from "@/components/popup";
import FileList from "./components/FileList";
import "./style.scss"


const DiscPage = () => {

    return (
        <div className="disk">
            <div className="disk__btns">
                <button className="disk__back">Назад</button>
                <button className="disk__create">Создать папку</button>
            </div>
            <FileList />
            <Popup />
        </div>
    )
};
export default DiscPage;