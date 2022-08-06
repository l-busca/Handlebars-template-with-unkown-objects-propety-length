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



