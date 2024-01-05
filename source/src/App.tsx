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
const App: React.FC<Props>  = (props1) => {

    return (
        <div className="appWrapper">
            <Header 
                state={props1.state} 
                getGo={props1.getGo} 
                getQuantity={props1.getQuantity}
                circleElement={props1.state.circleElement}
                />
            <Options state={props1.state} versionAnswer={props1.versionAnswer} getGo={props1.getGo} shuffleOptions={props1.shuffleOptions}/>
            <Control state={props1.state}  addAnswer={props1.addAnswer} getGo={props1.getGo}/>
        </div>
    );
};


export default App;