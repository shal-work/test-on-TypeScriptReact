
import React from 'react';
import s from './Options.module.css';
import { useEffect  } from 'react';
import { StateType, getGo, shuffleOptions, versionAnswer } from '../../redus/store';

type Props = {
    state: StateType
    getGo: getGo
    versionAnswer: versionAnswer
    shuffleOptions: shuffleOptions
}

const Options: React.FC<Props> = (props) => {

    let variant = props.shuffleOptions();
    const addResponse = (e: React.ChangeEvent<HTMLInputElement>) => {
        let textAnswer = e.target.value;
        let newAnswer = {
            id: props.state.count, 
            text: textAnswer 
        }
        props.versionAnswer(newAnswer);
    }

    useEffect( ()  => {
       if ( props.getGo() ) {
            let inputOptions : NodeListOf<HTMLInputElement> = document.querySelectorAll(".question-options");
            for (let i =0; i < inputOptions.length; i++) {
                if (inputOptions[i].checked) {
                    inputOptions[i].checked = false;
                }
            }
        }
    })
 
    let variantMap = variant.text.map((v, index) => 
        <li key={index}>
            <input className="question-options" id={'question_' + index} name='question' type="radio" onChange={addResponse} value={v} />
            <label className={s.answer} htmlFor={'question_' + index}>{v}</label>
        </li>
    )
    if( props.getGo()) { 
        return (
            <ul className={s.answers}>
                {variantMap}
            </ul>
            
        )
    } else {
        return (<div></div>)
    }
}

export default Options;

