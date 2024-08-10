import { Actor, d, QuestionAdapter, Task } from "@serenity-js/core";
import {Ensure, equals} from "@serenity-js/assertions";

export class RegisterValidation extends Task{
   
   /** 
    @apilink
    @param currentTitle
    @param expectedTitle
    */

protected constructor(private readonly currentTitle: QuestionAdapter<string>, private readonly expectedTitle: string){
    super(d `#actor validate title of page`)
}

    async performAs(actor: Actor): Promise<void> {
       const actualTitle = await actor.answer(this.currentTitle);

       await actor.attemptsTo(Task.where(`${actor.name} try validate title actual: ${actualTitle} with expectedTitle: ${this.expectedTitle}`,
        Ensure.that(actualTitle, equals(this.expectedTitle))
       ))
    }

    public static CompareTitleOfPage(currentTitle: QuestionAdapter<string>, expectedTitle: string):Task{
        return new RegisterValidation(currentTitle, expectedTitle);
    }

    
}