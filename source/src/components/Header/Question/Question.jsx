import React from 'react';
import s from './Question.module.css';
import Circle from './Circle';
import NumberQueastion from './NumberQueastion';
import TextQueastion from './TextQueastion';

const Question = (props) => {

    return (
        <div className={s.mainQuestion}>
            <NumberQueastion index={props.index} getQuantity={props.getQuantity}/>
            <Circle 
                answer={props.answer} 
                countTrue = {props.countTrue}
                countFalse = {props.countFalse}
            />
            {props.getGo()
                ? <TextQueastion text={props.text} index={props.index}/>
                : <></>
            }
            
        </div>
    )
}

export default Question;