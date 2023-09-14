import React from 'react';
import s from './Header.module.css';
import Logo from './Logo';
import Intro from './Intro';
import { getQuantity } from '../../redus/store';

type PropsType = {
    getQuantity: getQuantity
}

const MainIntro: React.FC<PropsType> = (props) => {
    return (
        <div className={s.mainIntro}>
            <Logo/>
            <Intro getQuantity={props.getQuantity}/>
        </div>
    )
}

export default MainIntro;