console.log('Hello World')

// 1. grab the element we want to manipulate
// 2. build our callback function to determine our action
// 3. combine both using addEventListener

let inputField = document.querySelector('input');

// let plusBtn = document.querySelector('#plus-btn');

function addMovie(event){
    event.preventDefault();
    const movie = document.createElement('li');
    console.log(movie);
    const movieTitle = document.createElement('span');
    console.log(movieTitle);
    movieTitle.textContent = inputField.value;

   

    //  Now we’ll need to append the movieTitle span to our movie element. Use the appendChild method on movie, passing in movieTitle to attach the title to its parent.
    
     movie.appendChild(movieTitle);
     
    // newDiv.appendChild(newContent);


    // Then, use querySelector to find the ul element that already exists in our HTML and use appendChild to attach the movie element we created to the list.

    let element = document.querySelector('ul');
    element.appendChild(movie);

    //In the addMovie function, after appending the movieTitle to movie, use createElement to create a new button element and save it to a variable called deleteBtn.
    const deleteBtn = document.createElement('button');

    //Set the textContent of deleteBtn to be the letter X.
    deleteBtn.textContent = 'x';

    // Use addEventListener to listen for a click event on the button and run the deleteMovie function. We will create that function later in this step.

    deleteBtn.addEventListener('click', deleteMovie);
    // console.log(deleteMovie);

     //Now that the button has been created, use the appendChild method to add deleteBtn onto the movie element.

     movie.appendChild(deleteBtn);

    // For a more user-friendly experience, let’s clear the input field when the ‘Add’ button is clicked so it’s ready for another movie. To do this, set the value of inputField to an empty string at the bottom of the addMovie function.

    inputField.value = ''

    // var el = document.querySelector(''); 
    
}


// Finally, outside of your function, use querySelector to select the form element and then use addEventListener to listen for a submit event on the form element and run the addMovie function.

let formElement = document.querySelector('form');
formElement.addEventListener('submit', addMovie);
console.log(addMovie);


//Finally, outside of the addMovie function, create a new function called deleteMovie that takes in an event parameter. When we click the button, we want to remove the entire list item. Since the button is a child of the list item, we can use event.target.parentNode.remove() to remove the entire list item. JavaScript knows what the target of this event is (the specific delete button that’s clicked) and will only get rid of that one button’s parent (the movie list item that holds the title and button). You should now have a functioning delete button on each movie you add!

function deleteMovie(event){
    event.target.parentNode.remove();
}
    
console.log(deleteMovie);
