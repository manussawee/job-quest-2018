export const changePage = page => ({
    type: 'CHANGE_PAGE',
    page,
})

export const addJoke = joke => ({
    type: 'ADD_JOKE',
    joke,
})

export const removeJoke = id => ({
    type: 'REMOVE_JOKE',
    id,
})

export const selectJoke = joke => ({
    type: 'SELECT_JOKE',
    joke,
})
