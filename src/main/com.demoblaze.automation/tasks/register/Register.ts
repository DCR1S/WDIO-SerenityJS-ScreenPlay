import { Task } from "@serenity-js/core";
import { TypeOn } from "../../interactions/TypeOn";

import { Click } from "@serenity-js/web";
import { RegisterPage } from "../../ui/RegisterPage";

export const Register = {

    with: (user:string, password:string)=>
        Task.where(`#actor try register with ${user} and ${password}`,
            Click.on(RegisterPage.sectionRegister()),
            TypeOn.element(RegisterPage.userInput(),user),
            TypeOn.element(RegisterPage.passwordInput(),password),
            Click.on(RegisterPage.confirmButton())
        )
}