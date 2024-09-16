import React from 'react';

import info from './icon/info.svg'
import output from './icon/output.png'

import './style/DeviceItem.css';

function CheckStatus({status}) {
    return (status === 'online' ? <span style={{fontSize: '15px', color: '#78B591'}}>{status}</span> :
        <span style={{fontSize: '15px', color: '#CB4B4B'}}>{status}</span>)
}

const DeviceItem = ({props}) => {
    return (
        <div className="device-item">
            <img src={output} alt="device" style={{ width: "100px", height: '100px' }}/>
            <div className="device-item-info">
                <h1>Логин:</h1><p style={{ marginLeft: "10px" }}>{props.name}</p>
            </div>
            <div className="device-item-info">
                <CheckStatus status={props.status}/>
                <button style={{ marginLeft: '50px' }}><img src={info} alt="detailed information"/></button>
            </div>
        </div>
    );
};

export default DeviceItem;