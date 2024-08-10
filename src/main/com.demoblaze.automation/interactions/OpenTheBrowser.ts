import { Answerable, d, Actor, Interaction } from "@serenity-js/core";
import { Navigate, PageElementInteraction } from "@serenity-js/web";

export class OpenTheBrowser extends PageElementInteraction{
    /** 
    @apilink
    @param url
    */
    protected constructor(private readonly url: Answerable<string>){
        super(d`#actor open the browser`);
    }

    async performAs(actor: Actor): Promise<void> {
        await actor.attemptsTo(Navigate.to(this.url));
    }

    public static on(url:string):Interaction{
            return new OpenTheBrowser(url);
    }

    
}