const getData = async () => {
  try {
    const response = await fetch('https://api-to-call.com/endpoint', {
      method: 'POST',
      body: JSON.stringify({id: 200})
    })
    if(response.ok){
      const jsonResponse = await response.json();
      return jsonResponse;
    }
    throw new Error('Request failed!');
  } catch(error) {
    console.log(error);
  }
}

//1.
//At the top of main.js create an async arrow function and save it to a const getData().

//The async keyword will ensure that the function returns a promise.


//2.
//In the code block for getData, we should add a try statement with an empty code block.

//In case things go wrong, we need to some code to handle that. Below the try code block, add a catch statement and pass in error as an argument.

//Then, in the catch statement code block, log error to the console.


//3.
//We now have to consider what we want to do inside of the try code block. Since we are making a POST request, we should start by using the await keyword before calling the fetch() function.

//We will have to save the returned promise in a variable called response using the const keyword.


//4.
//In the fetch() call that we just made, pass in the following URL to the function as a string for the first argument:

//https://api-to-call.com/endpoint
//Then as our second argument, let’s pass in an empty object for now.


//5.
//Let’s now fill in the request options in our second argument.

//First, add the method property and the value is 'POST'. Then we have to include a body property and the value is JSON.stringify({id: 200}).

//Remember to separate the properties with a comma.


//6.
//After the code block of response, we should create an if statement that checks the ok property of the response object.

//Inside the code block of the conditional statement, await the resolution of calling the .json() method on response. Save the returned object to a variable called jsonResponse using the keyword const.

//7.
//Now that we have what we want, we should return jsonResponse directly below the code written in the previous step.

//Like with previous boilerplate exercises, we're practicing writing code. Normally, we would want to do more beyond this step of returning jsonResponse.

//8.
//Below the if conditional, throw a new Error() with the message 'Request failed!'
