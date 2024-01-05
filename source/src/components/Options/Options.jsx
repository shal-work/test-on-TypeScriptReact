
import React from 'react';
import s from './Options.module.css';
import { useEffect  } from 'react';

const Options = (props) => {

    let variant = props.shuffleOptions();
    const addResponse = (e) => {
        let textAnswer = e.target.value;
        let newAnswer = {
            id: props.state.number, 
            text: textAnswer 
        }
        props.versionAnswer(newAnswer);
    }

    useEffect( ()  => {
       if ( props.getGo() ) {

            let inputOptions = document.querySelectorAll(".question-options");
            for (let i =0; i < inputOptions.length; i++) {
                if (inputOptions[i].checked) {
                    inputOptions[i].checked = '';
                }
            }
        }
    })
 
    let variantMap = variant.item.map((v, index) => 
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

