import React from 'react';
import s from './Header.module.css';
import logoUrl from '../../assets/img/html.png';

const Logo = (props) => {
    return (
        <div className={s.mainIntro__logo}>
            <img className={s.logo} src = {logoUrl} alt="logo"></img>
        </div>
    )
}

export default Logo;