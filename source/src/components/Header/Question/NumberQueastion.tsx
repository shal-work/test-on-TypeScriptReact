import React from 'react';
import s from './Question.module.css';
import { getQuantity } from '../../../redus/store';

type RropsType = {
    index: number,
    getQuantity: getQuantity
}

const NumberQueastion: React.FC<RropsType> = (props) => {
    return (
        <div className={s.mainQuestion__quantity}>
            Вопрос 
            <span className="current">&ensp;{props.index}</span> 
            <span> из </span>
            <span className="total">{props.getQuantity()}</span>
        </div>
    )
}

export default NumberQueastion;