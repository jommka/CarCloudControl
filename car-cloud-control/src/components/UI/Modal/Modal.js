import React, {useEffect, useMemo, useState} from 'react';
import add from "../Header/icon/add.svg";
import './style/Modal.sass'
import output from "../../icon/output.png";
import session_icon from "../../icon/session-icon.png";
import connection_icon from '../../icon/connection.png'
import {CONNECTIONS_ROUTE, MAIN_ROUTE, SESSIONS_ROUTE} from "../../../utils/consts";
import usePasswordToggle from "../../../hooks/usePasswordToggle";
import Selected from "../Select/Select";
import {DeviceSelect} from "../../../store/Item";


const Modal = ({location, show, onCloseButtonClick}) => {
    const [PasswordInputType, ToggleIcon] = usePasswordToggle()
    const [title, setTitle] = useState('Добавление устройства')
    const [img, setImg] = useState(output)
    const [widthImg, setWidthImg] = useState(120)

    useEffect(() => {
        switch (location) {
            case MAIN_ROUTE:
                setTitle('Добавление устройства');
                setImg(output);
                setWidthImg(120);
                break;
            case SESSIONS_ROUTE:
                setTitle('Добавление сессии');
                setImg(session_icon);
                setWidthImg(106)
                break;
            case CONNECTIONS_ROUTE:
                setTitle('Добавление подключения');
                setImg(connection_icon);
        }
    }, [location]);

    const renderMainRouteContent = () => (
        <div className="add-container device-container">
            <div className="block-input">
                <input type="text" required spellCheck="false"/>
                <label>Логин</label>
            </div>
            <div className="block-input">
                <input type={PasswordInputType} required spellCheck="false"/>
                <label>Пароль</label>
                <span>{ToggleIcon}</span>
            </div>
        </div>
    );

    const renderSessionsRouteContent = () => (
        <div className="add-container">
            <div className='sessions-block'>
                <p>Устройство:</p>
                <div style={{ marginTop: 'auto', marginBottom: 'auto' }}>
                    <Selected options={DeviceSelect}/>
                </div>
            </div>
            <div className='sessions-block'>
                <p>Тип:</p>
                <div style={{ marginTop: 'auto', marginBottom: 'auto' }}>
                    <Selected options={DeviceSelect}/>
                </div>
            </div>
            <div className='sessions-block'>
                <p>OBD2 device:</p>
                <div style={{marginTop: 'auto', marginBottom: 'auto'}}>
                    <Selected options={DeviceSelect}/>
                </div>
            </div>
        </div>
    )

    const renderConnectionsRouteContent = () => (
        <div className="add-container">
            <div className='sessions-block'>
                <p>Устройство:</p>
                <div style={{ marginTop: 'auto', marginBottom: 'auto' }}>
                    <Selected options={DeviceSelect}/>
                </div>
            </div>
            <div className="block-input">
                <input type="text" required spellCheck="false"/>
                <label>Код сессии</label>
            </div>
        </div>
    )

    const modalContent = useMemo(() => {
        switch (location) {
            case MAIN_ROUTE:
                return renderMainRouteContent();
            case SESSIONS_ROUTE:
                return renderSessionsRouteContent();
            case CONNECTIONS_ROUTE:
                return renderConnectionsRouteContent();
            default:
                return null;
        }
    }, [location, PasswordInputType, ToggleIcon]);

    if (!show) return null;

    return (
        <div className="modal-wrapper">
            <div style={{display: "flex", alignItems: "center", justifyContent: 'center', height: '100%'}}>
                <div className="modal-content">
                    <h1>{title}</h1>
                    <img src={img} alt="device" style={{ width: widthImg }} className='modal-img'/>
                    <div className='line'></div>
                    {modalContent}
                    <div className='button-container'>
                        <button className="button_add"><img src={add} alt=""/>Добавить</button>
                        <button onClick={onCloseButtonClick} className="cancel">Отмена</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;