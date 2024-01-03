
interface CustomError {
    statusText?: string;
    message?: string;
}

interface CustomizeData {
    category: string,
    difficulty: string,
    limit: number
}

type Item = {
    id: number;
    name: string;
    icon?: string;
}

interface ItemsInterface {
    items: Item[];
    title: string;
    updateState: React.Dispatch<React.SetStateAction<CustomizeData>>
    id: string
}

interface InputItemInterface {
    type: string,
    id: string,
    title?: string,
    placeholder?: string,
    updateState: React.Dispatch<React.SetStateAction<CustomizeData>>
}

interface navigationInterface {
    name: string
    href: string
}

interface customizedQuestionInterface {
    limit?: number
    category?: string
    difficulty?: string
}

type tagsType = {
    name: string
} 

type answersType = {
    answer_a: string
    answer_b: string
    answer_c: string
    answer_d: string 
    answer_e: string | null
    answer_f: string | null
}

type correctAnswersType = {
    answer_a_correct: string,
    answer_b_correct: string,
    answer_c_correct: string,
    answer_d_correct: string,
    answer_e_correct: string,
    answer_f_correct: string
}

interface responseObjectInterface {
    id: number
    question: string
    description: string | null
    answers: answersType
    // answers: answersType
    multiple_correct_answers: string
    correct_answers: correctAnswersType
    correct_answer : string
    explanation: string | null
    tip: string | null
    tags: tagsType[]
    category: string
    difficulty: string
}

interface resultInterface {
    id: number
    expectedAnswer: number
    actualAnswer: number
}