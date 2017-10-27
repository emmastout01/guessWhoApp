var guessWhoApp = angular.module('guessWhoApp', []);

console.log('script sourced');

guessWhoApp.controller('guessWhoController', function(){
    var guessWho = this;
    guessWho.name = "";
    guessWho.github = "";
    guessWho.message = "Guess Who!"
   
    guessWho.persons = [
        {name: 'Emma', github: 'emmastout01'},
        {name: 'Elvis', github: 'elvishang'},
        {name: 'Kris', github: 'kdszafranski'},
    ]

    guessWho.addPerson = function() {
        var newPerson = {name: guessWho.name, github: guessWho.github};
        guessWho.persons.push(newPerson)
        console.log('array of people: ', guessWho.persons);
    }
    
    guessWho.submit = function(person){
        guessWho.addPerson();
    };

    guessWho.imageClicked = function(person) {
        guessWho.message = "It's " + person + "!"
    }

   



});