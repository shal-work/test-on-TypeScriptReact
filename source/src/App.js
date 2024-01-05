import './App.css';
import Header from './components/Header/Header';
import Options from './components/Options/Options';
import Control from './components/Control/Control';
console.log("%c  РОССИЯ  ", "background: blue; color: yellow; font-size: x-large; border-left: 5px solid black; border-top: 30px solid white; border-right: 2px solid black; border-bottom: 30px solid red;");

const App = (props) => {
    return (
        <div className="appWrapper">
            <Header state={props.state} getGo={props.getGo} getQuantity={props.getQuantity}/>
            <Options state={props.state} versionAnswer={props.versionAnswer} getGo={props.getGo} shuffleOptions={props.shuffleOptions}/>
            <Control addAnswer={props.addAnswer} getGo={props.getGo} state={props.state} />
        </div>
    );
};

export default App;