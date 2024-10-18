import React from 'react';
import add from "../Header/icon/add.svg";
import './style/Modal.sass'
import output from "../../icon/output.png";
import usePasswordToggle from "../../../hooks/usePasswordToggle";

const Modal = ({ show, onCloseButtonClick }) => {
    const [PasswordInputType, ToggleIcon] = usePasswordToggle()
    if (!show) return null;
    return (
        <div className="modal-wrapper">
            <div style={{display: "flex", alignItems: "center", justifyContent: 'center', height: '100%'}}>
                <div className="modal-content">
                    <h1 style={{fontSize: '30px', fontWeight: '400', textAlign: "center", marginBottom: '30px'}}>Добавление устройства</h1>
                    <div className='modal-info'>
                        <img src={output} alt="device" style={{width: "120px", height: '120px'}}/>
                        <div className='line'></div>
                        <form>
                            <div className="block-input">
                                <input type="text" required spellCheck="false"></input>
                                <label>Логин</label>
                            </div>
                            <div className="block-input">
                                <input type={PasswordInputType} required spellCheck="false"></input>
                                <label>Пароль</label>
                                <span>{ToggleIcon}</span>
                            </div>
                        </form>
                    </div>
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginLeft: "auto",
                        marginRight: '29px',
                        gap: "40px",
                    }}>
                        <button className="button_add"><img src={add} alt=""/>Добавить</button>
                        <button onClick={onCloseButtonClick} className="cancel">Отмена</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;