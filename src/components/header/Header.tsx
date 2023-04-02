import React from 'react';
import s from './Header.module.scss'
import Navigate from '../navigate/Navigate';
import logo from '../../assets/image/headerImage/logo.svg'
import group from '../../assets/image/headerImage/Group 1086.svg'
import phone from '../../assets/image/headerImage/phone.svg'
import telegram from '../../assets/image/headerImage/Vector2.svg'
import viber from '../../assets/image/headerImage/Vector (1).svg'
import whatsapp from '../../assets/image/headerImage/whatsapp-svgrepo-com (1).svg'
import dot from '../../assets/image/headerImage/dot.svg'

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.container}>
                <div className={s.infoHeader}>
                    <div>
                        <a href="#">
                            <img className={s.logo} src={logo} alt=""/>
                        </a>
                    </div>
                    <div className={s.schedule}>
                        <p>Пн-Сб: c 10:00 до 20:00 </p>
                        <p>Выходной: воскресенье</p>
                    </div>
                    <div className={s.headerOrder}>
                        <div className={s.elipsGroup}>
                            <img className={s.group} src={group} alt=""/>
                        </div>
                        <p className={s.orderText}>Заказать 3D-макет дома</p>
                    </div>
                    <div className={s.headerPhone}>
                        <div className={s.elipsPhone}>
                            <img className={s.phoneImage} src={phone} alt=""/>
                            <img className={s.dot} src={dot} alt=""/>
                        </div>

                        <div>
                            <div className={s.phone}>
                                <a href="#">+7 (915) 168-55-50</a>
                            </div>
                            <div className={s.messengers}>
                                <img style={{width: '30px'}} src={whatsapp} alt=""/>
                                <img src={telegram} alt=""/>
                                <img src={viber} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className={s.headerButton}>Заказать звонок</button>
                    </div>
                </div>
                <Navigate/>
            </div>
        </header>
    );
};

export default Header;