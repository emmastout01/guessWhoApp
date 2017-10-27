var guessWhoApp = angular.module('guessWhoApp', []);

console.log('script sourced');
var person; 

guessWhoApp.controller('guessWhoController', function(){
    var guessWho = this;
    guessWho.name = ""; //This is good: declare variables that I'm going to use, even if they would
    //automatically be created anyway
    guessWho.github = "";
    //Another thing we can do: create an empty object up here--
    // welcome.personToAdd = {name: '', github: ''}
    //This would mean deleting the two variables above: now we're creating an object with properties
  

    guessWho.persons = [
        {name: 'Emma', github: 'emmastout01', show: true},
        {name: 'Elvis', github: 'elvishang', show: true},
        {name: 'Kris', github: 'kdszafranski', show: true},
    ]

    guessWho.addPerson = function() {
        var newPerson = {name: guessWho.name, github: guessWho.github, show: true};
        //Another way: add parameters to this function 'name, github', 
        //and then pass in guessWho.name and guessWho.github on index.html.
        //client then looks like:
        // var newPerson = {name: name, github: github}
        //This is better than the original. 
        //Another other way: 
        //Above, do the thing where we create an object instead of multiple variables.
        //Then, have an object as the parameter and pass in guessWho.personToAdd as an argument
        //on the html side. 
        guessWho.persons.push(newPerson)
        console.log('array of people: ', guessWho.persons);
        guessWho.randomPerson(guessWho.persons);
    }

    //Then, the function welcome.addPerson can become:
    // function(personToAdd) {
    //      people.push(personToAdd)
    // }
    

   guessWho.randomPerson = function(array) {
       //What I'm trying to do: on the message, display a random person's name from the whole array of people.
       //So could I put the array in as the parameter, and pass in guessWho.persons? Let's try that:
        var personIndex = Math.floor(Math.random() * (1 + (array.length-1) - 0 ) + 0);
        person = array[personIndex].name;
        console.log(person);
        guessWho.message = "It's " + person + "!"
   }

    guessWho.imageClicked = function(image) {
        angular.copy(image);
        if (image.name == person) {
           console.log('match');
           alert('Correct!');
           guessWho.persons.pop(image);
           guessWho.randomPerson(guessWho.persons);
           console.log(image);
           //guessWho.hideImage(image);
           image.show = false;
       } else {
           alert('Try again....');
       }
     }

    //  guessWho.hideImage = function(image) {
    //     if (image.name == person) {
    //         image.show = false;
    //     } else {
    //         image.show = true;
    //     }
    //  }

});

