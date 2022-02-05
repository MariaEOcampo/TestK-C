export interface iQuestions {
    name:string;
    title:string;
    content: Array<iQuestionsContent>
}

export interface iQuestionsContent{
        element:string;
        textContent:string;  
}