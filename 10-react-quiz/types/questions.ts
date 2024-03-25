export interface QuestionsProps {
    questions: string[],
    status: 'loading' | 'ready' | 'error' | 'active'
    index: number
    answer: null;
    points: number;
    highscore: number;
    secondsRemaining: null;
}