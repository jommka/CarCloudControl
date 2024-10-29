import React, {useRef, useState} from 'react';

import './style/SessionItem.sass';
import session_icon from './icon/session-icon.png'
import info_icon from './icon/information.svg'
import usePasswordToggle from "../hooks/usePasswordToggle";

const SessionItem = ({props}) => {
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const [PasswordInputType, ToggleIcon] = usePasswordToggle()
    const displayedPassword = "*".repeat(password.length);

    return (
        <div className='session-item'>
            <div className='session-container-input'>
                <div className='session-input'>
                    <label>устройство</label>
                    <input type="text" value={props.name} disabled></input>
                </div>
                <div className='session-input--date'>
                    <label>время</label>
                    <label>число</label>
                    <div className='date'>
                        <input type="text" value={props.time} disabled></input>
                        <hr/>
                        <input type="text" value={props.date} disabled></input>
                    </div>
                </div>
                <div className='session-input'>
                    <label>код</label>
                    <input type={PasswordInputType} value={props.password} disabled></input>
                    <span>{ToggleIcon}</span>
                </div>
            </div>
            <div className='session-icon'>
                <img src={session_icon} alt="sessions" className='img'/>
                <button className='session-button'>
                    <img src={info_icon} alt='detailed information'/>
                    Информация
                </button>
            </div>
        </div>
    );
};

export default SessionItem;