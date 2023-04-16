/* eslint-disable default-case */
// import uuid from 'uuid/v1';
export const bookReducer = (state, action) => {
    const {v4:uuidv4} = require('uuid');
    switch(action.type) {
        case 'ADD_BOOK':
            return [...state, {
                title: action.book.title,
                author: action.book.author,
                id: uuidv4()
            }]
        case 'REMOVE_BOOK':
            return state.filter(book => book.id !== action.id)
        default:
            return state
    }
}