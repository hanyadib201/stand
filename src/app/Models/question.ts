export interface Question { id: number;
    text: string;
    type: 'multiple-choice' | 'true-false' | 'matching' | 'fill-blank';
    correctTextAnswer: string | null;
    degree :number;
    options : Option[] | null;
}
export interface Option { id: number;
    text: string | null;
    isCorrect: boolean | null;
    leftItem: string[] | null;
    rightItem: string[] | null;
}
