# TypeScript-Getting-Started

Valid Java script is also valid typescript.

This is the official repository for my Pluralsight course titled [*TypeScript: Getting Started*](https://app.pluralsight.com/library/courses/typescript-getting-started/table-of-contents). 
The *main* branch contains code as it 
exists at the start of the course. There are separate branches named after the modules in the course that contain the code as it 
exists at the end of that module.

I will update this repo below with any problems or small issues reported between updates to the actual course.

Thanks for watching and good luck on your TypeScript projects!


# Module 1



Tsconfig
--------
    -Compiler options
    - target , version of java script es5
    - name of the java script file that the compiler will o  output.

files element is the files you want to compile.


Typescript home page 
--------------------
npm install -g typescript  /*installs typescript globally.

 - name - quickly browse all the type script compiler options
 - ts cli option - alphabetical list of all the compiler options.
 - --help ; console will list them there.

 e % tsc --init ; create tsconfig.json with all options

 watch; recompile source files as they are saved.

 tsc app.ts -> compiles and generates a java script file

 tsconfig files can be placed in each directory to use different behavior for folders.


Webpack
----------

Is the development server to deliver to the browser; that will serve your ouput java code

used to compile establish entry points into code e.g. app.ts
and output of java script ; ie. bundle.js

This  can be changed in the index.html ; bundle.js is cached and won't appear in the output folders.


 javascript
 -----------

 message!. {if you know value is not null or use if}





# 2 module 2
```
.Taking an of built in types
. declaration 
. type anonnotations and type inference
. Managing null and underfined
. Control flow-based type analysis
```

## Basic type script
```
Boolean 
Number - represents floating point same as javascrip
String - single or double quotes
       -template string `
Arrays - same as ..
Enum - not in java script but in type script
```

let instead of var for variables
e.g let someString = 'Hello World';

//constants , values don't change
const someString  = 'Hellow World';








