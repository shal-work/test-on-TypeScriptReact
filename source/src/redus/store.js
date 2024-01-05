
let store = {
    _state: {
        questions: {
            item: [
                {
                    id:1,
                    text: 'Какие из этих тегов относятся к элементу <table>?',
                    var: [
                        '<table><tr><td>',
                        '<table><tr><tt>',
                        '<table><head><tfoot>',
                        '<thead><body><tr>'
                    ]
                },
                {
                    id:2,
                    text: 'Как открыть ссылку в новой вкладке / окне браузера?',
                    var: [
                        '<a href="url" target="_blank">Текст</a>',
                        '<a href="url" new>Текст</a>',
                        '<a href="url" target="new">Текст</a>'
                    ]
                },
                {
                    id:3,
                    text: 'В каком месте HTML документа должны определяться теги <title>, <link> и <meta>?',
                    var: [
                        'В секции <head>',
                        'В секции <body>',
                        '<footer>'
                    ]
                },
                {
                    id:4,
                    text: 'Кто создает веб-стандарты?',
                    var: [
                        'World Wide Web Consortium (W3C)',
                        'Google',
                        'Mozilla',
                        'Microsoft'
                    ]
                },
                {
                    id:5,
                    text: 'Для какого тега элемент <!DOCTYPE> выступает родителем?',
                    var: [
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
                    var: [
                        '<ol>',
                        '<ul',
                        '<li>',
                        '<list>'
                    ]
                },
                {
                    id:7,
                    text: 'В каком формате определяется графика SVG?',
                    var: [
                        'XML',
                        'HTML',
                        'CSS'
                    ]
                },
                {
                    id:8,
                    text: 'Требуется вывести на страницу код, который написан на языке Java. Какой тег для этого необходимо использовать?',
                    var: [
                        '<code>',
                        '<java>',
                        '<pre>',
                        '<p>'
                    ]
                },
                {
                    id:9,
                    text: 'Можно ли использовать фреймы в HTML документах с переходным (transitional) DTD ?',
                    var: [
                        'Да',
                        'Нет'
                    ]
                },
                {
                    id:10,
                    text: 'Какой тип ввода определяет ползунок?',
                    var: [
                        'range',
                        'controls',
                        'search',
                        'slider'
                    ]
                },
                {
                    id:11,
                    text: 'Тег <iframe> используется для отображения веб-страницы внутри веб-страницы.',
                    var: [
                        'Да',
                        'Нет такого элемента <iframe>',
                        'Нет'
                    ]
                },
                {
                    id:12,
                    text: 'Какой атрибут определяет альтернативный текст для изображения, если изображение не может быть отображено?',
                    var: [
                        'alt',
                        'src',
                        'title'
                    ]
                },
                {
                    id:13,
                    text: 'Какое расширение должны иметь HTML документы?',
                    var: [
                        '.html или .htm',
                        '.php или .asp',
                        '.txt или .doc',
                        '.doc'
                    ]
                },
                {
                    id:14,
                    text: 'Выберите HTML-элемент для создания заголовка с высшим приоритетом:',
                    var: [
                        '<h1></h1>',
                        '<head></head>',
                        '<h6></h6>',
                        '<heading></heading>'
                    ]
                },
                {
                    id:15,
                    text: 'Какой элемент используется для отображения скалярного измерения в пределах диапазона?',
                    var: [
                        '<meter></meter>',
                        '<gauge></gauge>',
                        '<measure></measure>',
                        '<range></range>'
                    ]
                },
                {
                    id:16,
                    text: 'Выберите перечень, в котором все теги являются устаревшими.',
                    var: [
                        '<strike>, <font> и <center>',
                        '<center>, <span> и <div>',
                        '<u>, <b> и <s>',
                        '<menu>, <font> и <span>'
                    ]
                },
                {
                    id:17,
                    text: 'Укажите тег позволяющий определить таблицу',
                    var: [
                        '<table></table>',
                        '<tabs></tabs>',
                        '<tr></tr>',
                        '<tab></tab>'
                    ]
                },
                {
                    id:18,
                    text: 'Папки images и pages лежат в корне сайта. В папке images лежит файл foto.jpg. Как правильно написать путь к foto.jpg из файла page.html?',
                    var: [
                        '../images/foto.jpg',
                        'pages/images/foto.jpg',
                        '../images/pages/foto.jpg',
                        'images/foto.jpg'
                    ]
                },
                {
                    id:19,
                    text: 'Какой элемент HTML определяет заголовок документа?',
                    var: [
                        '<title></title>',
                        '<head></head>',
                        '<meta></meta>'
                    ]
                },
                {
                    id:20,
                    text: 'Какой HTML-код предназначен для вставки фонового изображения?',
                    var: [
                        '<body style="background-image:url(background.gif)">',
                        '<background img="background.gif">',
                        '<body bg="background.gif">'
                    ]
                }


            ]
        },
        answer: [],
        number: 1,
        countTrue: 0,
        countFalse: 0
    },
    getState() {
        return this._state;
    },
    initAnswer() {
        let initEnd = this.getQuantity();
        for(let i=0; i < initEnd; i++ ) {
            let newAnswer = {
                id: (i + 1),
                correctAnswer: false,
                viewAnswer: false
            }
            this._state.answer.push(newAnswer);
        }
    },
    _renderEntireTree() {
        console.log('Вызов state');
    },
    _checkingDo: true,
    getQuantity() {
        let count = this._state.questions.item.length;
        return count;
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
        if (this._state.questions.item[this._varAnswer.id - 1].var[0] === this._varAnswer.text) {
            this._state.answer = this._state.answer.map(q => {
                if (q.id === this._varAnswer.id) {
                    this._state.countTrue++;
                    return {...q, correctAnswer: true, viewAnswer: true }
                }
                return q;
            })
        } else {
            this._state.answer = this._state.answer.map(q => {
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
    _addNumber(){
        if (this._state.number < this.getQuantity()) {
            this._state.number++;
        } else {
            this._checkingDo = false;
        }
    },
    shuffleOptions(){
        let arr = {item: this._shuffleVar(), id: this._state.number};
        // debugger
        return arr;
    },
    _shuffleVar() {
        let num = this._state.number;
        let array = [...this._state.questions.item[num-1].var];
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
window.store = store;
export default store;
