import { AnswersQuestions, Question, QuestionAdapter, UsesAbilities } from "@serenity-js/core";
import { Page } from "@serenity-js/web";



export class RegisterQuestion{

private constructor(){}

static getTitlePage():QuestionAdapter<string>{

    return Question.about<string>('the title of page', async (actor: AnswersQuestions & UsesAbilities) =>{
        return Page.current().title().answeredBy(actor);
    });
}



} 