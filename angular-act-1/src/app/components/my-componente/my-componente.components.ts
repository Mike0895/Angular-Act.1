import { Component } from "@angular/core";
@Component({ 
    selector:'my-componente', 
    template:`
    <h1>Bienvenidos todos</h1>
    <p>Estamos creando un componente</p>

    `
})

export class MyComponente{
    constructor(){
        console.log("Se ha cargado el componente");
    }

}