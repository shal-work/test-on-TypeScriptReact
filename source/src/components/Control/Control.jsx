import React from 'react';
import s from './Control.module.css';

const Control = (props) => {

    const onwards = () => {
        props.addAnswer();
    }
  
    return (
        <div>
            { props.getGo()
                ? <button className={s.nextQuestion} onClick={onwards} >Дальше »</button> 
                : <button disabled className={`${s.nextQuestion} ${s.nextQuestionDisabled}`} > Всё </button> 
            }
        </div>
        
    )
}

export default Control;