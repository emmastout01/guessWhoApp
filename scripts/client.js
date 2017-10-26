var guessWhoApp = angular.module('guessWhoApp', []);

console.log('script sourced');

guessWhoApp.controller('guessWhoController', function(){
    var guessWho = this;
    guessWho.message = "Guess Who!"
    guessWho.submit = function(person){
        guessWho.message = "It's " + person + "!"
        console.log('submit button clicked!')
    };

    guessWho.persons = [
        {name: 'Emma', github: 'emmastout01'},
        {name: 'Chris', github: 'christopherblack'},
        {name: 'Kris', github: 'kdszafranski'},
    ]
    guessWho.name = "";
    guessWho.github = "";

    guessWho.addPerson = function() {
        var newPerson = {name: guessWho.name, github: guessWho.github};
        guessWho.persons.push(newPerson)
    }



});