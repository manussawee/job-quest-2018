# TakeMeTour's Job Quest 2018 Edition

Thank you for your interest in working at TakeMeTour. First, we would like to take a simple test on your coding skill.

Please fork this repo and work on the test. After finishing the test, please send your repo to WantToWork@takemetour.com (Subject: JavaScript Engineer Application).

The quest has 2 major parts: **Front-end** and **Back-end**. If you interesting on which part you can work on the test only that part. But you can do both. (Or in case you want to apply as **Full-stack Engineer** you should done both. Obviously.)

Also in both part has some question needed to be answer. So don't forget to done that. Answer can be both in Thai or English.

## Front-End

You are going to make a web application which allow users to get some joke from **Chuck Norris**.

> Chuck Norris once ordered a Big Mac at Burger King, and got one.

In case you don't know who the heck is Chuck Norris. See his statement.

![](https://blazepress.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_620/MTI4OTk1Mjg4MDE3OTEzODY2/18.webp)

(Sorry. Please just google it)

### Features
- Users can get a joke from [Chuck Norris API](http://www.icndb.com/api/)
- Users has options to change number of result jokes, user's first name and last name
- How to display the result is up to you.

### Technical description
- Using data from [REST API](http://www.icndb.com/api/)
- Any tools & framework is allowed.
- If you are using tools & framework which is same as our tech stack (React, Redux, styled-components etc.) will be a plus.
- Any extra feature will be a plus.

### Front-end Questions

1. Please explain a situation that using Redux to manage application state is more helpful than original React's state.

    __ANSWER__: Redux is going to be considered to be used, when there are a lot of the components that need to manage other component's state. And the application needs to have global state as well. Bacause Redux allows developers to manage global state. So, developers will no longer need to pass props from component to its child component and pass to its child of child component, again and again, like a props chain.

2. Why do we need "Server-Side Rendering". Please explain.

    __ANSWER__: There are many benefits from applying Server-Side Rendering technique to a web application. 
    - The first one is decreasing client-side loads because most of the necessary data will be prepared on the server-side. It means that users will see the necessary data at the same time the first response received.
    - The second one is Server-Side Rendering provides ability to apply an SEO(Search Engine Optimization) to the website. Because, search engines often track the data from websites before the websites will render DOM layer. So, without SSR and the website needs to fetch some data using client-side JavaScript, the search engines will hardly track the data we want people to use as keywords.

3. Explain the differences of `null` and `undefined`

    __ANSWER__: `null` is value assigned by programmers and never be assigned by JavaScript. It's often used to represent the nonexistence of variables. On the other hand, `undefined` can be assigned by JavaScript when variable is declared without being assignd any value to it. Moreover, the types of them are not the same. For `null`, its type is `object` but the type of `undefined` is `undefined`. By the way, both of them are considered as the same value, if they are compared by using the equality (`==`) operator. But for the identity (`===`) operator, they are not the same.

4. Tell us the benefit of using ESLint.

    __ANSWER__: ESLint improves code quality in many ways, including it makes the code more clean and increases readability to the code. a developer who didn't write the code will easily understand the code in a short time. It also provides the standard to the developer team to follow. they will have the same standard and understand what other developer wrote. And ESLint also finds the syntax errors before the code is executed and finds unused variables as well.

## Back-End

You are going to made a simple **Thai's joke API**. And this API is follow to REST API pattern.

Thai's joke API can allow user to explore, add, delete, like or dislike Thai's joke.

### Endpoints
- `GET /` Get all jokes.
- `POST /` Add new joke.
- `GET /:id` Get joke by id.
- `DELETE /:id` Delete joke. (In case you hate it)
- `POST /:id/like` Like a joke. (Because we don't have authentication system yet. Like spaming is fine here.)
- `POST /:id/dislike` Dislike a joke. (Same as above. Dislike spaming is fine here.)

- `POST /reset` Reset session data of user to do the anti-spamming test.

### Technical description
- All data must store to the database. Any database is fine. But we prefer MongoDB.
- Back-end code must written in Node.js. Any library or helper tools is up to you.

### Bonus
- If you can make like/dislike system can't be spammed (like or dislike action only happen once for each joke respect to user). We will give you a bonus on that.
- If you deploy this API publicly to anywhere with some **GOOD Thai's joke** to get. We will give you a bonus on that as well. (Deploy to where and how is up to you. But don't forget to send us your work.)

### Back-end Questions

1. Explain a benefit gain from using JavaScript to implements back-end API server.
    
    __Answer__: There are a lot of benefits from using JavaScript to implements back-end API server.
    - The first one is the server will be fast, if it is implemented with JavaScript. Comparing among PHP, Go, JAVA, Ruby, JavaScript, and etc, the best performance language is Go but JavaScript is still the second best performance language and faster than all of the rest so many times.
    - The second one is JavaScript always be used in front-end application to make website more dynamic. So, most of the web developers understand this language and be able to use it. It means that working with JavaScript on the server-side won't be a hard thing to learn and understand. Its learning curve is not too high for a developer who know JavaScript on front-end.
    - The third one, JavaScript is a non-blocking language which are a good thing and a bad thing at the same time depend on the usage and design. It makes JavaScript be able to execute multiple statements in the same time but it is quite hard to understand at the first time to learn it.
    - The forth one is node.js (an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside the browser.) has its own package manager(NPM) with a lot of useful packages on it. It means that there is no problem about finding some third-party tools for doing some specific job.

2. Explain what is a GraphQL?
    
    __Answer__: GraphQL is a query language for **preparing sufficient data** from server-side with two main benefits, which are filtering unused data fields out (deleted_at, id, and etc) and fulfilling necessary relations to the data (post.user, post.comments, and etc).

3. If you have a task to convert existing back-end API which follow to REST API pattern to GraphQL. Which approach you will make?
    
    __Answer__: There are two approches which depend on the objective of this conversion. 
    - If the objective is to convert existing back-end API with **minimized performance loss**, the approach will be replacing whole REST API with GraphQL by removing all routes (REST endpoint) in the existing back-end server and using only one endpoint for GraphQL queries/mutations. With this approch, the existing functions that were called inside old routes (REST endpoint) are reusable because a mechanism of GraphQL resolvers often similar to the REST version. Although, this approch provides minimized performance loss but it consumes a lot of working cost.
    - If the objective is to convert existing back-end API with **minimized working cost**, the approach will be an easier way than the first one in the term of development. It is to create the GraphQL layer which is a node.js application placed between the client-side application (caller) and the existing back-end API (callee). This GraphQL layer will be called by client-side and it will call the existing back-end API to get response data. With this design, this GraphQL layer will perform like a middleware for translating GraphQL queries/mutations into REST API request. By the way, this approch still has a downside which is each request sent from client-side will initiate two connections. The first connection is client-side to the GraphQL layar and the second connection is the GraphQL layer to the existing back-end API. It means that response time will be increased.
