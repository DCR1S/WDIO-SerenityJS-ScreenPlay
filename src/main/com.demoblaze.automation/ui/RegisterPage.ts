import { By, PageElement } from "@serenity-js/web";

export const RegisterPage = {

    sectionRegister: () =>
        PageElement.located(By.xpath("//a[.='Sign up']")).describedAs("Section Register"),

    userInput: () =>
        PageElement.located(By.xpath("//input[@id='sign-username']")).describedAs("User Input"),

    passwordInput: () =>
        PageElement.located(By.xpath("//input[@id='sign-password']")).describedAs("Password Input"),

    confirmButton: () =>
        PageElement.located(By.xpath("//button[.='Sign up']")).describedAs("Confirm Button"),

    
}