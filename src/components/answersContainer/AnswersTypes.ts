export type AnswersContainerPropType = { isAnswered: boolean, questionIndex: number, setAnswer: () => void }
export type QuestionType = {
    correct_answer: string,
    incorrect_answers: [],
    question: string,
}

export type CurrentQuestionType = {
    title: string,
    randomAnswers: string[],
    correctAnswer: string
}