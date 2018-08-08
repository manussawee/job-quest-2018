let _jokes = localStorage.getItem('jokes')
if(_jokes) _jokes = JSON.parse(_jokes)
else _jokes = []

const jokes = (state = _jokes, action) => {

    let newJokes = []

    switch(action.type) {
        case 'ADD_JOKE':
            if(state.find(joke => joke.id === action.joke.id)) {
                return state
            } else {
                newJokes = [...state, action.joke ]
                localStorage.setItem('jokes', JSON.stringify(newJokes))
                return newJokes
            }
        case 'REMOVE_JOKE':
            newJokes = state.filter(joke => joke.id !== action.id)
            localStorage.setItem('jokes', JSON.stringify(newJokes))
            return newJokes
        default:
            return state
    }
}

export default jokes
