import React from 'react';
import s from './Navigate.module.scss'

const Navigate = () => {
    return (
        <div className={s.navigate}>
            <div>
                <span>Каталог домов </span>
                <select></select>
            </div>
            <div>
                <span>Услуги </span>
                <select></select>
            </div>
            <div>
                <span>О нас </span>
                <select></select>
            </div>
            <div>
                <span>Контакты </span>
                <select></select>
            </div>
            <div>
                <span>Блог </span>
                <select></select>
            </div>


        </div>
    );
};

export default Navigate;