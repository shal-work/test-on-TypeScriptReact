import React from 'react';
import s from './Question.module.css';
import { CircleElementType } from '../../../redus/store';
import useWindowDimensions from '../../Hook/GetWindowDimensions';

type Props = {
    circleElement: Array<CircleElementType>
    countTrue: number
    countFalse: number
}

const Circle: React.FC<Props> = (props) => {

    const { width, height } = useWindowDimensions();
    // debugger
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
    //     <>
    //         <div className={s.circle}>
    //             {circleElement}
    //         </div>
    //         <div className={s.circleGadget}>
    //             <div className={s.circleGadget__target}>1</div>
    //             <div className={s.circleGadget__target}>2</div>
    //         </div>

    //     </>

    // )
}

export default Circle;