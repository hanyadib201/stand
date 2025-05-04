import { Routes } from '@angular/router';
import { QuizComponent } from './component/quiz/quiz.component';

export const routes: Routes = 
[
    {path: 'quiz/:quizId/:userName', component:QuizComponent},
];
