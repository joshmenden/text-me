# Text Me!

So you want to be a programmer huh? With just a little bit of work, you'll be taking your first steps toward world domination!

![Let's do this meme](https://github.com/joshmenden/text-me/blob/master/images/letsdothis.jpg?raw=true)

## Hello World!

It's a programmer's [rite of passage](https://en.wikipedia.org/wiki/%22Hello,_World!%22_program) to have their first program in any new language be a simple program that prints "Hello World!". So let's get things set up to do this!


### Setting Up Environment

There are a few things we'll want to do to get your programming space set up. Let's go through them one by one.

1. Download [VSCode](https://code.visualstudio.com/download)

    You'll want a "text editor" in order to do your hacking. VSCode is what I use at work. It's free and super customizable.

2. Download [Git](https://git-scm.com/download/win)

    Git is an industry-standard program used to keep track of different versions of a program. Don't worry, you don't need to have any idea what it does yet. I'll walk you through it.

3. Open the "Command Prompt" program and navigate to a folder.

    I've only ever done any programming on a Mac, so I'll be a little less helpful on this for Windows. But you'll want to open the Command Prompt program and navigate to a folder where you can add some files for programming. The app "Command Prompt" should be available just in your "All Programs" option, if not, you should be able to Google it pretty easily.

    Once you have the prompt open, you'll want to use the following commands to navigate to a folder where we can do our coding.

        - `cd` to see what folder you are currently in
        - `dir` to see the subdirectories of the folder you are currently in
        - `cd\name_of_subfolder` to get into a folder
        - `cd..` (maybe `cd ..`?) to go back up a folder


4. Use Git to "clone" this repository

    Once you're in a folder where you can do some coding, let's go ahead and copy this "repository." A "repository" is basically just a grouping of files. This repository is named `text-me` and is currently being hosted on Github.

    So run `git clone https://github.com/joshmenden/text-me.git`

    And then run `cd` and you should see a new folder! Go ahead and enter that folder, and then open that folder in VSCode so you can see all of its contents.

5. Download [Node.js](https://nodejs.org/en/download/)

    We will be doing our programming in JavaScript. Node.js (.js stands for JavaScript) is an engine that processes the JavaScript language and then tells the computer what to do.

6. Install Libraries for Program

    Once you're in the `/text-me` folder that you just "cloned," we need to download some libraries to help with our program. So go ahead and run `npm install` to install them.


### Run the Program!

Ok! If all of that went to plan, you're ready to run Hello World!

In your terminal, run `node hello_world.js`

In your VSCode, you'll the file `hello_world.js`. It's super simple! You can play around with it and have it print out different things.

## Send a Text