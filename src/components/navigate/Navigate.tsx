import React from 'react';
import s from './Navigate.module.scss'

const Navigate = () => {
    return (
        <div className={s.navigate}>
            <div>

                <select className={s.select}>
                    <option value="value" selected>Каталог домов</option>
                </select>
            </div>
            <div>
                <select className={s.select}>
                    <option value="value" selected>Услуги</option>
                </select>
            </div>
            <div>
                <select className={s.select}>
                    <option value="value" selected>О нас</option>
                </select>
            </div>
            <div>
                <a className={s.nav} href="#">Контакты</a>
            </div>
            <div>
                <select className={s.select}>
                    <option value="value" selected>Блог</option>
                </select>
            </div>


        </div>
    );
};

export default Navigate;