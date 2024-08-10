import { Answerable, d, Actor, Interaction } from "@serenity-js/core";
import { Enter, PageElement, PageElementInteraction } from "@serenity-js/web";

export class TypeOn extends PageElementInteraction{
    /** 
    @apilink
    @param element
    @param text
    */
    protected constructor(private readonly text: Answerable<string>, private readonly locator: Answerable<PageElement>){
        super(d`#actor type ${text}`);
    }

    async performAs(actor: Actor): Promise<void> {
        await actor.attemptsTo(Enter.theValue(this.text).into(this.locator));
    }

    public static element(pageElement:Answerable<PageElement>, text: string):Interaction{
            return new TypeOn(text, pageElement);
    }

    
}