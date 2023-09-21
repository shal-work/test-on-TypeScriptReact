import React from 'react';
import s from './Header.module.css';
import Question from './Question/Question';
import MainIntro from './MainIntro';
import Title from './Title';
import { CircleElementType, StateType, getGo, getQuantity} from '../../redus/store';



type PropsType = {
    state: StateType,
    circleElement: Array<CircleElementType>,
    getGo: getGo,
    getQuantity: getQuantity
}

const Header: React.FC<PropsType> = (props) => {
    let index = props.state.count - 1;
    return (
        <div className={s.main}>
            <Title/>
            <MainIntro getQuantity={props.getQuantity}/>
            <Question 
                circleElement={props.circleElement} 
                text={props.state.questions.issue[index].text} 
                index={props.state.count} 
                getGo={props.getGo} 
                getQuantity={props.getQuantity}
                countTrue = {props.state.countTrue}
                countFalse = {props.state.countFalse}
            />
        </div>
    )
}

export default Header;
