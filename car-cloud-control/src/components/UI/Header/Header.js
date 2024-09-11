import React from 'react';
import icon from './icon/main_icon.svg'
import menu from './icon/menu.svg'

const Header = () => {
    return (
        <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
            <img src={icon} alt="Car Cloud Control"/>
            <h1 style={{ fontSize: '36px', fontWeight:'600', color: '#78B591'}}>Car Cloud Control</h1>
            <button style={{ background: 'transparent' }}>
                <img src={menu} alt="User" style={{ width: '44px', height: '44px' }}/>
            </button>
        </div>
    );
};

export default Header;