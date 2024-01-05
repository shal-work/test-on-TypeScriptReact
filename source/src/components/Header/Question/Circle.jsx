import React from 'react';
import s from './Question.module.css';
import useWindowDimensions from '../../../Hook/GetWindowDimensions';


const Circle = (props) => {
    const { width, height } = useWindowDimensions();
    let circleElement = props.answer.map( p => {
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
    if(width <= 800 || (width/height > 1 && width <= 800) ) {
        return (
            <div className={s.circleGadget}>
                <div className={s.circleGadget__target}>{props.countTrue}</div>
                <div className={s.circleGadget__target}>{props.countFalse}</div>
            </div>
        )
    } else {
        return (
            <div className={s.circle}>
                {circleElement}
            </div>
        )
    }
    // return (
    //     <div className={s.circle}>
    //         {circleElement}
    //     </div>
    // )
}

export default Circle;