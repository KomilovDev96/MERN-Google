import { Typography } from 'antd';

const { Title } = Typography;
import "./style.scss"
const MainPage = () => {
    return (
        <div>
            <Title>Desc</Title>
            <div className='disk_btns'>
                <button className='disk__back'>Назад</button>
                <button className='disk__create'>Создать папку</button>
            </div>
            <div>
               
            </div>
        </div>
    )
}

export default MainPage