import React from 'react';
import s from './ImgHouse.module.scss'

type ImgHouseType = {
    imgHouse: string
}

export const ImgHouse:React.FC<ImgHouseType> = ({imgHouse}) => {
    return (
        <div className={s.img}>
             <img src={imgHouse} alt=""/>
        </div>
    );
}