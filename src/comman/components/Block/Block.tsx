import  React from 'react';
import s from './Block.module.scss'

type BlockType = {
    icon: string
}

export const Block = (props:BlockType ) =>{
    return (
        <div className={s.block}>
            <img className={s.img} src={props.icon} alt=""/>
        </div>
    );
}