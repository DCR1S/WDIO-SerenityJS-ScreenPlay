import { Given, Then, When } from '@cucumber/cucumber'
import { OpenTheBrowser } from '../../../main/com.demoblaze.automation/interactions/OpenTheBrowser';
import { actorCalled, actorInTheSpotlight } from '@serenity-js/core';
import { Register } from '../../../main/com.demoblaze.automation/tasks/register/Register';
import { RegisterValidation } from '../../../main/com.demoblaze.automation/tasks/register/RegisterValidation';
import { RegisterQuestion } from '../../../main/com.demoblaze.automation/questions/register/RegisterQuestion';
import { performancetotal } from 'wdio-performancetotal-service';


Given(/^(.*) esta en (.*)$/, async function(actor, environment) {

    actorCalled(actor);
    
    await actorInTheSpotlight().attemptsTo(
        OpenTheBrowser.on(environment)
    );

}

);


When(/^ingrese (.*) y (.*)$/, async function(user, pass) {

    performancetotal.sampleStart("Startup");
    await actorInTheSpotlight().attemptsTo(
        Register.with(user, pass)
    );
    performancetotal.sampleEnd("Startup");

}
);


Then(/^observo el titulo de la pagina (.*)$/, async function(titulo){
   
    await actorInTheSpotlight().attemptsTo(
        RegisterValidation.CompareTitleOfPage(RegisterQuestion.getTitlePage(), titulo)
    );

} );
