import * as React from 'react';
import s from './Figura.module.scss'
import imgVideo from '../../../assets/image/mainImage/Video.svg'


export const Figura = () => {
    return (
        <div className={s.figura}>
            <div className={s.elips}>
                <img className={s.imgVideo} src={imgVideo} alt=""/>
                <button className={s.button}>видеоотзыв</button>
            </div>
        </div>
    );
}