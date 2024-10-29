import React from 'react';
import {Link, NavLink, useLocation} from "react-router-dom";

import icon from './icon/main_icon.svg'
import menu from './icon/menu.svg'
import add from "./icon/add.svg";

import {CONNECTIONS_ROUTE, MAIN_ROUTE, SESSIONS_ROUTE} from "../../../utils/consts";
import Modal from "../Modal/Modal";
import useModal from "../../../hooks/useModal";

const Header = () => {
    const [isShowingModal, toggleModal] = useModal();
    const location = useLocation();

    return (
        <>
            <Modal location={location.pathname} show={isShowingModal} onCloseButtonClick={toggleModal} />
            <header style={{display: "flex", justifyContent: "space-around", alignItems: "center"}} className="App">
                <Link to={MAIN_ROUTE}>
                    <img src={icon} alt="Car Cloud Control"/>
                </Link>
                <h1 style={{fontSize: '36px', fontWeight: '600', color: '#78B591'}}>Car Cloud Control</h1>
                <button style={{background: 'transparent', border: 'none', cursor: 'pointer'}}>
                    <img src={menu} alt="User" style={{width: '44px', height: '44px'}}/>
                </button>
            </header>

            <div style={{marginTop: '100px'}} className="App">
                <div className="navigation_menu">
                    <div style={{display: "flex", flexDirection: "column", gap: "14px"}}>
                        <ul>
                            <li><NavLink to={MAIN_ROUTE}>Устройства</NavLink></li>
                            <li><NavLink to={SESSIONS_ROUTE}>Сессии</NavLink></li>
                            <li><NavLink to={CONNECTIONS_ROUTE}>Подключения</NavLink></li>
                        </ul>
                        <hr/>
                    </div>
                    <button className="button_add" onClick={toggleModal}><img src={add} alt=""/>Добавить</button>
                </div>
            </div>

        </>
    );
};

export default Header;