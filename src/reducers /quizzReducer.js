import {GET_QUIZZ} from '../actions/types';

const initialState = {
    questions: [],
}

export default function (state= initialState , action){
    switch(action.type){
        case GET_QUIZZ:
            return{
                ...state,
                questions: action.payload,
            };  
        default:
            return {
                ...state
            }
    }
}