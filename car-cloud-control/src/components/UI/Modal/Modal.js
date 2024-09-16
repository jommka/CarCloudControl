import React from 'react';
import add from "../Header/icon/add.svg";
import './style/Modal.css'
import output from "../../icon/output.png";

const Modal = ({ show, onCloseButtonClick }) => {
    if (!show) {
        return null;
    }

    return (
        <div className="modal-wrapper">
            <div style={{position: "relative", width: "auto", left: '50%', transform: 'translateX(-50%)'}}>
                <div className="modal-content">
                    <h1 style={{fontSize: '32px', fontWeight: '400'}}>Добавление устройства</h1>
                    <div className='modal-info'>
                        <img src={output} alt="device" style={{width: "100px", height: '100px'}}/>
                        <div className='line'></div>
                        <div>
                            <button className="button_add"><img src={add} alt=""/>Добавить</button>
                            <button onClick={onCloseButtonClick}>Отмена</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;