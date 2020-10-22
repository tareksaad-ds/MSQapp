import {GET_QUIZZ } from './types';
import { QuestionsList } from '../questions'

export const getQuizz = () => dispatch => {
    const shuffledQ = QuestionsList
        .map((a) => ({sort: Math.random() * 1000, value: a}))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value);
    dispatch ({
        type: GET_QUIZZ,
        payload: shuffledQ
    });
};