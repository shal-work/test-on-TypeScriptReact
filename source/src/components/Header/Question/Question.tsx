import React from 'react';
import s from './Question.module.css';
import Circle from './Circle';
import NumberQueastion from './NumberQueastion';
import TextQueastion from './TextQueastion';
import { CircleElementType, getGo, getQuantity } from '../../../redus/store';

type PropsType = {
    index: number,
    circleElement: Array<CircleElementType>,
    text: string,
    getQuantity: getQuantity,
    getGo: getGo
}

const Question: React.FC<PropsType> = (props) => {

    return (
        <div className={s.mainQuestion}>
            <NumberQueastion index={props.index} getQuantity={props.getQuantity}/>
            <Circle circleElement={props.circleElement}/>
            {props.getGo()
                ? <TextQueastion text={props.text} index={props.index}/>
                : <></>
            }
            
        </div>
    )
}
export default Question;