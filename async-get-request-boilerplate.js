const getData = async () => {
  try {
    const response = await fetch('https://api-to-call.com/endpoint');
    if (response.ok) {
      // code to execute if success
      const jsonResponse = await response.json();
      return jsonResponse;
    }
    throw new Error('Request failed!');
  } catch (error) {
    //code to handle errors, normally redirect to different page
    console.log(error);
  }
}

//Here are some key points to keep in mind as we walk through the code:

//await can only be used in an async function. await allows a program to run while waiting for a promise to resolve.
//In a try...catch statement, code in the try block will be run and in the event of an exception/error, the code in the catch statement will run.

//1.
//In main.js, create an arrow function using the async keyword and save it to a const getData.

//The async keyword will ensure that the function returns a promise.

//2.
//In the code block for getData, we should add a try statement with an empty code block.

//Below the try statement's code block, add a catch(error) statement.

//The code in the try block will send a request and handle the response. The catch statement will then take care of an error if it is thrown.

//3.
//Inside the catch code block, log error to the console.

//Since this exercise is an example, we’re using console.log() to view the error. Generally, developers create a more sophisticated way of handling the error, like redirecting their users to another page, but logging is fine for us at the moment.

//4.
//Now we have to consider what to do inside of the code block of the try statement. We should start by using the await keyword before calling fetch(). Pass in the following URL, as a string, to the function as its first argument:

//https://api-to-call.com/endpoint
//We’ll have to save the returned promise in a variable called response using the const keyword. response will save the the response of endpoint once that information has been sent back.

//5.
//Under response, create a conditional statement that checks if the ok property of the response object evaluates to a truthy value.

//6.
//Inside the code block of the conditional statement, await the resolution of calling the .json() method on response.

//Save the returned object to a variable called jsonResponse using the keyword const.

//Since .json() is an asynchronous method we have to await until the promise status is resolved. Then we store the value to know what data the JSON holds.

//7.
//Return jsonResponse directly below the code you wrote in the previous step.

//Normally, we'd want to use the information from jsonResponse in a different manner. In this exercise, we're practicing how to write the boilerplate code.

//8.
//Below the conditional statement, throw a new Error. The message the error should raise is ‘Request failed!’.
