var guessWhoApp = angular.module('guessWhoApp', []);

console.log('script sourced');

guessWhoApp.controller('guessWhoController', function(){
    var guessWho = this;
    guessWho.message = "Guess Who!"
    guessWho.submit = function(person){
        guessWho.message = "It's " + person + "!"
        guessWho.addPerson();
        console.log('submit button clicked!')
    };

    guessWho.persons = [
        {name: 'Emma', github: 'emmastout01'},
        {name: 'Elvis', github: 'elvishang'},
        {name: 'Kris', github: 'kdszafranski'},
    ]
    guessWho.name = "";
    guessWho.github = "";

    guessWho.addPerson = function() {
        var newPerson = {name: guessWho.name, github: guessWho.github};
        guessWho.persons.push(newPerson)
        console.log(newPerson);
        console.log('array of people: ', guessWho.persons);
    }



});