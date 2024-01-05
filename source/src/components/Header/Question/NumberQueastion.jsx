import React from 'react';
import s from './Question.module.css';

const NumberQueastion = (props) => {
    return (
        <div className={s.mainQuestion__quantity}>
            Вопрос
            <span><strong>&ensp;{props.index}</strong></span>
            <span> из </span>
            <span><strong>{props.getQuantity()}</strong></span>
        </div>
    )
}

export default NumberQueastion;
