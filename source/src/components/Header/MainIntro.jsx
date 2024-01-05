import React from 'react';
import s from './Header.module.css';
import Logo from './Logo';
import Intro from './Intro';

const MainIntro = (props) => {
    return (
        <div className={s.mainIntro}>
            <Logo/>
            <Intro getQuantity={props.getQuantity}/>
        </div>
    )
}

export default MainIntro;