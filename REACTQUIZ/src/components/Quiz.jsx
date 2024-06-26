import { useCallback, useState } from "react";

import QUESTIONS from "../questions.js";
import QuizCompltedImg from '../assets/quiz-complete.png'
import Question from "./Questions.jsx";

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([])

    const activeQuestionIndex = userAnswers.length;
    const quizIsComleted = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback(
        function handleSelectAnswer(selectedAnswer) {
            setUserAnswers((preveUserAnswer) => {
                return [...preveUserAnswer, selectedAnswer]
            });

        }, []);

    const handleSkipAnswer = useCallback(
        () => handleSelectAnswer(null),
        [handleSelectAnswer])

    if (quizIsComleted) {
        return (
            <div id="summary">
                <img src={QuizCompltedImg} alt="QuizComplted" />
                <h2>Quiz Comleted!</h2>
            </div>
        );
    }

    return (
        <div id="quiz">
            <Question
                key={activeQuestionIndex}
                index={activeQuestionIndex}
                onSelectAnswer={handleSelectAnswer}
                onSkipAnswer={handleSkipAnswer}
            />
        </div>

    )
}