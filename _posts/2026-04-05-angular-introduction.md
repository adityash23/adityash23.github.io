---
layout: post
title: Angular - Introduction
date: 2026-02-26 14:24:00
description: an introduction to some basic functionalities in angular
tags: software-eng front-end 
categories: academic
featured: true
---

Angular is a front-end web framework maintained by Google. This post covers some of the basic functionalities in Angular such as data binding, directives, services, pipes and routing to create multi page applications.  

**index.html** calls each component to display based on the tag that defines it

Within app.ts or any TS file, *@Component* defines information about this component - 
- selector is the name that is used as a tag in HTML code in any file to render this component
- template is the HTML code that decides what to display in the component. If inline option selected, HTML code shows directly here. Otherwise, templateUrl field points to the separate file that contains the HTML code
- style defines the custom styles to be used only on the objects defined within this component. Basically, each component is binded to the styles defined in its TS file. If inline option selected, CSS code shows directly here. Otherwise, styleUrl field points to the separate file that contains the CSS code


To make a new component - ```ng g c <path within the app folder where we want the component to be created>```

Defining variables using signal in TS - ```var = signal(input value)```. To retrieve value in HTML file, do ```{{ var() }}```

#### Data Binding
Passing data from a parent component to child component - 
1. inside parent.html, when writing the HTML tag for the child, do ```<app-child [varName]="value"/>```
- value can be a string placed within '' or a signal variable - signalVar()
2. inside the child.TS, within the export class code, write ```varName = input('Some default value')```
3. child.html can now use this signal same as before - ```{{ varName() }}```

#### Event Listeners
For a component, if we want a custom function based on something that user does on page, do - 
- in HTML file, ```<input type = "text" (keyup)="keyUpHandler($event)" />```
- General - ```<input type = "text" (eventTrigger)="functionToBeCalled($anyInputPassed)" />```
- in TS file, define the function 
```
keyUpHandler(event : KeyboardEvent) {
    console.log(`user pressed ${event.key} key`);
  }
```

2 ways to update the signal value -  
  Initilaize - ```counterValue = signal(0);```   
  Method 1 - ```increment() {this.counterValue.set(this.counterValue() + 1);}```  
  Method 2 - ```decrement() {this.counterValue.update(value => value - 1);}```

** Can not do basic value assignment - ```this.counterValue = 1``` is  NOT ALLOWED

Routing to different pages from the main page - 
within app.routes.ts
```
export const routes: Routes = [{
    path: '',
    pathMatch: 'full',
    loadComponent: () => {
        return import('./home/home').then(m => m.Home);
    },
},
{
    path: 'todos',
    loadComponent: () => {
        return import('./todos/todos').then(m => m.Todos);
    }
}
];
```

The above method reloads the entire page upon changing path. To load only new components use routerLink. Within html file of where you want the page-change links to appear (ideally header) - 

```
<header>
    <nav>
        <span routerLink = "/">{{ title() }}</span>
        <ul>
            <li routerLink = "/todos">Todos</li>
        </ul>
    </nav>
</header>
```

Now the text Todos becomes clickable and loads new components accordingly

#### Services - used to encapsulate data. Similar to making an object that stores data that is used elsewhere. Also used to make HTTP calls

Services have Injectable decorator so they can be injected into any component

To make a component render something on initialization make, within its TS file, make the exported class implement OnInIt and write function - 
```
ngOnInit(): void {
    // code to run on loading this component
  }
```


Running a for loop in html - 
```
@for (todo of todoItems(); track $index) {
    <p>{{ todo.title }}</p>
}
```

General - ```for (indivItem of arrayName; track uniqueValBetweenArrayItems or $index)```

#### Directives - allow additional behaviour to elements in Angular applications

Structural directive - element is shown or completely removed from the UI

To use a component or directive in some HTML file, first import it in the corresponding TS file

#### Pipe - used to transform data straight in the template instead of TS file
- import the pipe in the TS file of the component where you want to use the pipe
- inside the HTML file, write text | pipeName. Ex - ```<label> {{ todo().title | uppercase }}</label>```

Generating a custom pipe - ```ng g pipe pipes/pipeName```

In a custom defined pipe,* @Pipe* has a field name that tells how to use this pipe in the HTML file.

In the exported class, complete the transform function to perform the data modification as needed.

To provide input for a custom defined pipe - ```text | pipeName: inputArg```