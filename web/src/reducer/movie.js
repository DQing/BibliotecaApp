import bookInfo from '../constant/bookInfo'

export default (state = bookInfo, action) => {
    switch (action.type) {
        case 'BOOK_DETAIL':
            return Object.assign({}, state, action.data)
        default:
            return state
    }
}
