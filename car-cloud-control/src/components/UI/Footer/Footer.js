import React from 'react';
import facebook from './icon/facebook.svg'
import insta from './icon/insta.svg'
import whatsapp from './icon/whatsapp.svg'
import telegram from './icon/telegram.svg'
import twit from './icon/twit.svg'
import arrow from './icon/arrow.svg'


import icon from "./icon/icon.svg";

const Footer = () => {
    return (
        <footer>
            <div className="footer_block">
                <div className="column_nav_bar" style={{ width: '65%' }}>

                    <img src={icon} alt="Car Cloud Control"/>
                    <hr style={{width: "100%", size: "1", opacity: '0.13'}}/>
                    <div className="communication_footer">
                        <button className="button_communication_footer"><img src={facebook} alt="facebook"></img></button>
                        <button className="button_communication_footer"><img src={insta} alt="instagram"></img></button>
                        <button className="button_communication_footer"><img src={whatsapp} alt="whatsapp"></img></button>
                        <button className="button_communication_footer"><img src={telegram} alt="telegram"></img></button>
                        <button className="button_communication_footer"><img src={twit} alt="twit"></img></button>
                    </div>
                </div>
                <div className="column_nav_bar" style={{ flexDirection: 'row', justifyContent: "space-between", margin: '0 50px 0 50px'}}>
                    <ul id="footer_column">
                        <div className=" nav_title">
                            <div id="hr_block">
                                <hr/>
                            </div>
                            <p>Компания</p>
                        </div>
                        <li><img src={arrow} alt="arrow"/>О компании</li>
                        <li><img src={arrow} alt="arrow"/>Команда</li>
                    </ul>
                    <ul id="footer_column" style={{ marginLeft: '50px' }}>
                        <div className="nav_title">
                            <div id="hr_block">
                                <hr/>
                            </div>
                            <p>Помощь</p>
                        </div>
                        <li><img src={arrow} alt="arrow"/>Вопрос-ответ</li>
                        <li><img src={arrow} alt="arrow"/>Контакты</li>
                        <li><img src={arrow} alt="arrow"/>Сообщество</li>
                    </ul>
                </div>
                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: '10px',
                    gridColumn: 'span 2'
                }}>
                <hr id="stroke_footer"/>
                    <p id="stroke_p_footer"
                       style={{color: "#757575", fontSize: "18px", fontWeight: "400", display: "inline"}}>© 2024</p>
                    <hr id="stroke_footer"/>
                </div>
            </div>
        </footer>
    );
};

export default Footer;