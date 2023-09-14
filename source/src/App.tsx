import './App.css';
import Control from './components/Control/Control';
import Header from './components/Header/Header';
import Options from './components/Options/Options';
import { StateType, addAnswer, getGo, getQuantity, shuffleOptions, versionAnswer } from './redus/store';


console.log("%c  РОССИЯ  ", "background: blue; color: yellow; font-size: x-large; border-left: 5px solid black; border-top: 30px solid white; border-right: 2px solid black; border-bottom: 30px solid red;");

type Props = {
    state: StateType,
    getGo: getGo,
    getQuantity: getQuantity,
    versionAnswer: versionAnswer,
    shuffleOptions: shuffleOptions,
    addAnswer: addAnswer
}
const App: React.FC<Props>  = (props) => {

    return (
        <div className="app-wrapper">
            <Header 
                state={props.state} 
                getGo={props.getGo} 
                getQuantity={props.getQuantity}
                circleElement={props.state.circleElement}
                />
            <Options state={props.state} versionAnswer={props.versionAnswer} getGo={props.getGo} shuffleOptions={props.shuffleOptions}/>
            <Control state={props.state}  addAnswer={props.addAnswer} getGo={props.getGo}/>
        </div>
    );
};


export default App;