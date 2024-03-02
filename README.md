# Assessment for Unit 3

Being a developer requires an acute attention to detail. The expectation of this assessment is that all instructions are read carefully and followed completely.

A good developer will ask clarifying questions when a task is unclear and use all the resources at their disposal.

The step-by-step instructions [here](https://github.com/LEARNAcademy/Syllabus/blob/main/github/assessments.md) breakdown the git and GitHub process for this assessment.

Assessment should be accessed through the GitHub Classroom link provided to you in Slack.

PRs should be posted _before_ class begins on Monday, March 4, 2024.

#### Process

- Accept the assignment via GitHub Classroom link shared with you in Slack
- `cd` into an appropriate location on your local, we recommend the Desktop
- Clone the assessment repository
- `cd` into the assessment
- Create a branch with the unit and your name, e.g `unit-3-sarah-proctor`
- Run $ `yarn` to install the React dependencies
- Run $ `yarn start` to start the server
- Complete all assessment tasks
- Git add files, commit, push to your branch
- Create a pull request and leave the branch open for review!

---

### React Challenge

1. React Debugging: The Card Draw React application has three (3) errors that need to be fixed. Use the console and error messages to guide you to the solution.

2. React Feature: Add functionality to the `Return Cards and Shuffle Deck` button using the `shuffle` function to reset the Card Draw application to its original state.

3. React Concepts: Add comments to the seven (7) notations in the `drawCard` function describing in detail the functionality line of code BELOW the comment.

4. STRETCH (optional): Add stylings of your choice to the application. Ensure the styling does not interfere with the card draw functionality.

### Interview Practice Questions

1. What are three (3) syntax differences between HTML and JSX?

- JSX uses className instead of just class as an identifier.
- JSX allows for the use of JavaScript in the return by placing it within {} curly braces and the use of html <tags><tags/> inside of functions and components.
- JSX allows for Component calls using a <Component /> tag. Combining an html tag and 

2. What is yarn? What file(s) are modified when you run the command yarn in your terminal?
Yarn is a package manager that installs a large library of code snippets. Used to make your life easier as you didn't have to go out find and install all of the node modules yourself. When yarn is installed it modifies the yarn.lock, package.json, and the node modules in your react app file.

3. What is the difference between state values and props in React?
State values are mutable instances of your app's data at a given point in time. Props are the pipeline for you to pass data unidirectionally from your main .js file to your components.

4. STRETCH (optional): What is the difference between a div tag and a span tag?
The div tag is used to divide a block of your web page allowing you to separate certain parts of your page from other parts. The span tag is used to separate certain words or lines of text. Allowing you to make more specific edits to a set of data via CSS.

### Looking Ahead: Terms for Next Unit

1. Object-oriented programming: Object-oriented programming looks at the object you want to change instead of the logic. It works well for large programs. You can break projects down into smaller groups for teams to work on. It's very scalable, has wonderful efficiency and focuses on code reusability. OOP's structure is broken down into 4 main areas classes, objects, methods and attributes. It also has 4 main principles which are encapsulation, abstraction, inheritance, and polymorphism.

2. Ruby: Ruby is an open-source object-oriented scripting language. Object-oriented languages create smaller pieces of code turning them into objects. They are reusable and can even be used in other applications. It was created by Yukihiro Matsumoto in the 90's. He wanted to speed up development by making code more reusable.

3. Ruby Hashes: Hashes are like objects in JavaScript. It contains a set of key-value pairs. In Ruby hashes are called by calling the hash name followed by the [key] in square brackets. A hash is written within {} curly brackets. It utilizes the hash rocket (=>) instead of a semicolon (:) to separate a key and value within the hash.

---

### Assessment Review Process

When an instructor reviews a student's assessment the instructor is evaluating the work through the lens of the Dreyfus model of skill acquisition. The Dreyfus model describes how individuals progress through various levels in their learning process of new skills in the following levels: novice, advanced beginner, competent, proficient, expert. For this course students will be evaluated as novice, advanced beginner, or competent skill levels. Skill levels are not grades! Skill levels measure the current understanding of a set of topics covered in class.

Assessments are expected to be completed on time. In the event of an emergency, a professional developer will communicate with the instructor and reestablish a deadline suitable to both parties. Assessments turned in late without communication will be evaluated at a lower level of skill acquisition.

### Incomplete

An assessment that is considered incomplete is one that does not meet the requirements of a valid attempt on every question. Incomplete assessments will not be reviewed and will be returned to the student for completion. Students with incomplete assessments will not be able to access the next assessment until the current one is complete. An assessment will be considered incomplete due to the following:

- questions with no answer (excluding STRETCH options)
- no pseudo code when requested
- non-working code with no accompanying explanation

### Complete

An assessment that is considered complete is one that meets the bare minimum requirements of a valid attempt on every question. An assessment that is considered complete did not display enough effort to reach the novice level of skill acquisition.

### Novice

The novice stage is the first level of skill acquisition. In the novice level, the student is just beginning to understand the skill and requires a step-by-step "recipe" to produce an output. An assessment that is considered at the novice level of skill acquisition is one that meets the requirements of a valid attempt on every question while closely following process notes from class to produce:

- basic pseudo code
- code that will output content in the terminal
- "your answers" written in the student's own words
- researched answers written in the student's own words that provide additional context

### Advanced Beginner

The advanced beginner stage is the second level of skill acquisition. At the advanced beginner level, the student can begin to troubleshoot problems on their own and can decide if the "recipe" will be able to produce a particular outcome. An assessment that is considered at the advanced beginner level of skill acquisition is one that meets the requirements of a valid attempt on every question while adapting process notes from class to produce:

- pseudo code with proper vocabulary terms
- code that will output correct content in the terminal
- "your answers" written in complete sentences in the student's own words that provide partially correct comments
- researched answers written in complete sentences in the student's own words that provide additional context

### Competent

The competent stage is the third level of skill acquisition. At the competent level, the student can decide what information is relevant to solve the problem and can begin to create their own "recipe" to produce a particular outcome. An assessment that is considered at the competent level of skill acquisition is one that meets the requirements of a valid attempt on every question while adapting process notes from class as well as from other resources to produce:

- detailed pseudo code with proper vocabulary terms
- code that will output correct content in the terminal following best practices
- "your answers" written in complete sentences in the student's own words that provide correct answers
- well-researched and detailed answers written in complete sentences in the student's own words that provide additional context
