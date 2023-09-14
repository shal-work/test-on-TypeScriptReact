import React from 'react';
import s from './Question.module.css';

type Props = {
    index: number
    text: string
}

const TextQueastion: React.FC<Props> = (props) => {

    return (
        <div className={s.mainQuestion__text}>
            <p>
                <span>{props.index}. </span>
                <span>{props.text}</span>
            </p>
        </div>
    )
}

export default TextQueastion;