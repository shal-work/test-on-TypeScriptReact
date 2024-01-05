import React from 'react';
import s from './Header.module.css';

const Intro = (props) => {
    return (
        <div className={s.mainIntro__text}>
            <h2>Тест по HTML</h2>
            <div className={s.mainIntro__description}>
                <p>Описание<strong>&ensp;{props.getQuantity()} вопросов по основам HTML.</strong> При очередном прохождении теста многие вопросы будут заменены. За каждый правильный ответ вы получаете 1 балл, в конце каждого теста вы получаете свой общий балл.</p>
            </div>
        </div>
    )
}

export default Intro;
