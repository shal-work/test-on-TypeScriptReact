type VarIsueType = string[]

type IsueType =  {
    id: number
    text: string
    var_issuse: VarIsueType
}

export type CircleElementType = {
    id: number
    correctAnswer: boolean
    viewAnswer: boolean
}

type QuestionsType =  {
    issue: Array<IsueType>
}

export type StateType = {
    questions: QuestionsType
    circleElement: Array<CircleElementType>
    count: number
    countTrue: number
    countFalse: number
}

export type AnswerType = {
    id: number
    text: string
}
export type ShuffleType = {
    id: number
    text: string[]
}

export type getQuantity = () => number
export type getGo = () => boolean
export type versionAnswer = (answer: AnswerType) => void
export type addAnswer = () => void
export type shuffleOptions = () => ShuffleType



export type StoreType = {
    _state: StateType
    _checkingDo: boolean
    _varAnswer: AnswerType
    getState: () => StateType
    initAnswer: () => void
    _renderEntireTree: (_state?: StateType) => void
    getQuantity: getQuantity
    getGo: getGo
    versionAnswer: versionAnswer
    addAnswer: addAnswer
    shuffleOptions: shuffleOptions
    _addNumber: () => void
    _shuffleVar: () => Array<string>
    subscribe: (observer: any) => void
}

let store: StoreType = {
    _state:  {
        questions: {
            issue: [
                {
                    id:1, 
                    text: 'Какие из этих тегов относятся к элементу <table>?',
                    var_issuse: [ 
                        '<table><tr><td>', 
                        '<table><tr><tt>', 
                        '<table><head><tfoot>', 
                        '<thead><body><tr>'
                    ]
                },
                {
                    id:2, 
                    text: 'Как открыть ссылку в новой вкладке / окне браузера?',
                    var_issuse: [ 
                        '<a href="url" target="_blank">Текст</a>', 
                        '<a href="url" new>Текст</a>', 
                        '<a href="url" target="new">Текст</a>'
                    ]
                },
                {
                    id:3, 
                    text: 'В каком месте HTML документа должны определяться теги <title>, <link> и <meta>?',
                    var_issuse: [ 
                        'В секции <head>', 
                        'В секции <body>', 
                        '<footer>'
                    ]
                },
                {
                    id:4, 
                    text: 'Кто создает веб-стандарты?',
                    var_issuse: [ 
                        'World Wide Web Consortium (W3C)', 
                        'Google', 
                        'Mozilla',
                        'Microsoft'
                    ]
                },
                {   
                    id:5, 
                    text: 'Для какого тега элемент <!DOCTYPE> выступает родителем?',
                    var_issuse: [ 
                        'Ни для одного тега', 
                        '<BODY>', 
                        '<TITLE>',
                        '<HTML>',
                        '<HEAD>'
                    ]
                },
                {   
                    id:6, 
                    text: 'Укажите тег позволяющий определить нумерованный список.',
                    var_issuse: [ 
                        '<ol>', 
                        '<ul', 
                        '<li>',
                        '<list>'
                    ]
                },
                {   
                    id:7, 
                    text: 'В каком формате определяется графика SVG?',
                    var_issuse: [ 
                        'XML', 
                        'HTML', 
                        'CSS'
                    ]
                },
                {   
                    id:8, 
                    text: 'Требуется вывести на страницу код, который написан на языке Java. Какой тег для этого необходимо использовать?',
                    var_issuse: [ 
                        '<code>', 
                        '<java>', 
                        '<pre>',
                        '<p>'
                    ]
                },
                {   
                    id:9, 
                    text: 'Можно ли использовать фреймы в HTML документах с переходным (transitional) DTD ?',
                    var_issuse: [ 
                        'Да', 
                        'Нет'
                    ]
                },
                {   
                    id:10, 
                    text: 'Какой тип ввода определяет ползунок?',
                    var_issuse: [ 
                        'range', 
                        'controls', 
                        'search',
                        'slider'
                    ]
                },
                {   
                    id:11, 
                    text: 'Тег <iframe> используется для отображения веб-страницы внутри веб-страницы.',
                    var_issuse: [ 
                        'Да', 
                        'Нет такого элемента <iframe>', 
                        'Нет'
                    ]
                },
                {   
                    id:12, 
                    text: 'Какой атрибут определяет альтернативный текст для изображения, если изображение не может быть отображено?',
                    var_issuse: [ 
                        'alt', 
                        'src', 
                        'title'
                    ]
                },
                {   
                    id:13, 
                    text: 'Какое расширение должны иметь HTML документы?',
                    var_issuse: [ 
                        '.html или .htm', 
                        '.php или .asp', 
                        '.txt или .doc',
                        '.doc'
                    ]
                },
                {   
                    id:14, 
                    text: 'Выберите HTML-элемент для создания заголовка с высшим приоритетом:',
                    var_issuse: [ 
                        '<h1></h1>', 
                        '<head></head>', 
                        '<h6></h6>',
                        '<heading></heading>'
                    ]
                },
                {   
                    id:15, 
                    text: 'Какой элемент используется для отображения скалярного измерения в пределах диапазона?',
                    var_issuse: [ 
                        '<meter></meter>', 
                        '<gauge></gauge>', 
                        '<measure></measure>',
                        '<range></range>'
                    ]
                },
                {   
                    id:16, 
                    text: 'Выберите перечень, в котором все теги являются устаревшими.',
                    var_issuse: [ 
                        '<strike>, <font> и <center>', 
                        '<center>, <span> и <div>', 
                        '<u>, <b> и <s>',
                        '<menu>, <font> и <span>'
                    ]
                },
                {   
                    id:17, 
                    text: 'Укажите тег позволяющий определить таблицу',
                    var_issuse: [ 
                        '<table></table>', 
                        '<tabs></tabs>', 
                        '<tr></tr>',
                        '<tab></tab>'
                    ]
                },
                {   
                    id:18, 
                    text: 'Папки images и pages лежат в корне сайта. В папке images лежит файл foto.jpg. Как правильно написать путь к foto.jpg из файла page.html?',
                    var_issuse: [ 
                        '../images/foto.jpg', 
                        'pages/images/foto.jpg', 
                        '../images/pages/foto.jpg',
                        'images/foto.jpg'
                    ]
                },
                {   
                    id:19, 
                    text: 'Какой элемент HTML определяет заголовок документа?',
                    var_issuse: [ 
                        '<title></title>', 
                        '<head></head>', 
                        '<meta></meta>'
                    ]
                },
                {   
                    id:20, 
                    text: 'Какой HTML-код предназначен для вставки фонового изображения?',
                    var_issuse: [ 
                        '<body style="background-image:url(background.gif)">', 
                        '<background img="background.gif">', 
                        '<body bg="background.gif">'
                    ]
                }
                

            ]
        },
        circleElement: [],
        count: 1,
        countTrue: 0,
        countFalse: 0
    },
    getState() {
        return this._state;
    },
    initAnswer() {
        let initEnd = this.getQuantity();
        for(let i=0; i < initEnd; i++ ) {
            let newAnswer: CircleElementType = {
                id: (i + 1),
                correctAnswer: false,
                viewAnswer: false
            }
            this._state.circleElement.push(newAnswer);
        }
    },
    _renderEntireTree() {
        console.log('Вызов state');
    },
    _checkingDo: true,
    getQuantity() {
        let length = this._state.questions.issue.length;
        return length;
    },
    getGo(){
        return this._checkingDo;
    },
    _varAnswer: {
        id: 1, 
        text: '' 
    },
    versionAnswer (answer) {
        this._varAnswer.id = answer.id; 
        this._varAnswer.text = answer.text;
    },
    addAnswer () {
        if (this._state.questions.issue[this._varAnswer.id - 1].var_issuse[0] === this._varAnswer.text) {
            this._state.circleElement = this._state.circleElement.map(q => {
                if (q.id === this._varAnswer.id) {
                    this._state.countTrue++;
                    return {...q, correctAnswer: true, viewAnswer: true }
                }
                return q;
            })
        } else {
            this._state.circleElement = this._state.circleElement.map(q => {
                if (q.id === this._varAnswer.id) {
                    this._state.countFalse++;
                    return {...q, correctAnswer: false, viewAnswer: true }
                }
                return q;
            })
        }
        
        this._addNumber();
        this._shuffleVar();
        this._renderEntireTree(this._state);
    },
    shuffleOptions(){
        let arr = {id: this._state.count, text: this._shuffleVar()};
        return arr;
    },
    _addNumber(){
        if (this._state.count < this.getQuantity()) {
            this._state.count++;
        } else {
            this._checkingDo = false;
        }
    },
    _shuffleVar() {
        let num = this._state.count;
        let array = [...this._state.questions.issue[num-1].var_issuse];
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    },
    subscribe (observer){
        this._renderEntireTree = observer;
    }
};

export default store;
