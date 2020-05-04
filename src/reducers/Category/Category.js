
const category = (state = {}, action) => {

    switch (action.type) {
        case 'init':
            return { page: '', totalPages: '', totalResults: 0, trailer: [] }

        case 'getCategoryList':
            return { ...state, category: action.data }

        default:
            return state

    }

}

export default category;

