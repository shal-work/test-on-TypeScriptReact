import React from 'react';
import s from './Question.module.css';

const TextQueastion = (props) => {

    return (
        <div className={s.mainQuestion__text}>
            <p>
                <span><strong>{props.index}.</strong> </span>
                <span>{props.text}</span>
            </p>
        </div>
    )
}

export default TextQueastion;
