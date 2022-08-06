const handlebars = require('handlebars');
const fs = require('fs');

const dir = './jsonFiles';
const target = './htmlFiles';

const sample = {"meal_replacement_why_label":[
    {
    "keep_muscle":"Muskelnerhalten"
    },
    {
    "recovery_workout":"Recovery nach dem Workout"
    },
    {
    "power_sport":"Sportliche Leistung"
    },
    {
    "muscle_stretching":"Muskeldehnung"
    },
    {
    "sports nutrition":"Sporternährung"
    }
    ]};


let source = "{{#each meal_replacement_why_label}}"+
                    "{{#each this}}"+
                            "{{this}}, "+
                    "{{/each}}"+
             "{{/each}}";
let template = handlebars.compile(source);

console.log(template(sample));





/*
Les problèmes que y'avait c'était fs.readdir qui est en async est du coup la suite marchait pas
car enfaite fallait mettre tout dans le callback en mode "quand t'as recup les fichiers fait ça en attendant moi je fais d'autres trucs"
sauf que la tout le programme depend de ça donc on aurait tout eu dans le callback donc autant mettre en dehors
donc a chaque fois que y'a ça truc (req, callback_param => { balbal on m'apelle quand on a fini de recup les trucs ça depend des promises ?}) donc on en voit souvent
au final j'ai mis readdirSync mais plus rien marchait c'est pcq fallait enlever le callback et juste mettre la ligne du coup
*/


