import React from 'react';
import Menu from "../components/UI/Menu/Menu";
import add from './icon/add.svg'

const Main = () => {
    return (
        <main style={{height: "50vh", marginTop: '70px'}} className="App">
            {/*<Menu/>*/}
            <div className="navigation_menu">
                <ul>
                    <li><p>Устройства</p></li>
                    <li><p>Сессии</p></li>
                    <li><p>Подключения</p></li>
                </ul>
                <button className="button_add"><img src={add} alt=""/>Добавить</button>
            </div>
        </main>
    );
};

export default Main;