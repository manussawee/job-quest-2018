const joke = (state = null, action) => {
    switch(action.type) {
        case 'SELECT_JOKE':
            return action.joke
        default: 
            return state
    }
}

export default joke