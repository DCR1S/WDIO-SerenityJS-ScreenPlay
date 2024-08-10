Feature: Registrarme en Blaze demo
 @registro
 Scenario Outline: <TCID> Ingresar usuario y password

   Given <actor> esta en <ambiente>
   When ingrese <usuario> y <password>
   Then observo el titulo de la pagina <titulo>

     Examples:
       | TCID    | actor     |  ambiente                  | usuario   | password   | titulo           |
       |   TC1   | Cristian  |  https://www.demoblaze.com/|  techqa1  |   1234     | STORE            |