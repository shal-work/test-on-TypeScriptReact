import React from 'react';
import s from './Question.module.css';
import { CircleElementType } from '../../../redus/store';

type Props = {
    circleElement: Array<CircleElementType>
}

const Circle: React.FC<Props> = (props) => {

    let circleElement = props.circleElement.map( p => {
        if(!p.viewAnswer) {
            return <div className={s.circle__target} key={p.id}/>
        } else {
            if(p.correctAnswer) {
                return <div className={s.circle__target + ' ' + s.true} key={p.id}/>
            } else {
                return <div className={s.circle__target + ' ' + s.false} key={p.id}/>
            }
        }
    })

    return (
        <div className={s.circle}>
            {circleElement}
        </div>
    )
}

export default Circle;