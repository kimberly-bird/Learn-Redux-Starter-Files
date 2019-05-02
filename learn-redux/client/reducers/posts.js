// a reducer takes in two things
// 1. the action (info about what happened)
// 2. a copy of current state

// action, store -> let me see, and then return the updated copy of the store and then react will take over and update the UI and virtual dom

// first tine this runs, state is empty, so es6 is set it as an empty array
export default function posts(state = [], action) {
    switch (action.type) {
        case 'INCREMENT_LIKES':
            console.log("incremenbing likes");
            const i = action.index;
            return [
                ...state.slice(0,i), // before the one we are updating (copy of data)
                {...state[i], likes: state[i].likes + 1}, // just update likes for the one post
                ...state.slice(i +1), // after the one we are updating
            ]
            
        default:
            return state;
    }
    return state;
}

