// Déclaration des variables globales
var JourSemaine = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];


// Attendre que la page soit chargée pour remplir les listes déroulantes
function domReady(f) {
    if (document.readyState === 'complete') {
        f();
    } else {
        document.addEventListener('DOMContentLoaded', f);
    }
}

domReady(function() {
    menu_semaine(); // quand la page est chargée, elle affichera le pavé menu se la semaine
});


// Remplissage des listes déroulantes
function liste_deroulantes() {

    fetch('plats.csv')
        .then(function(response) {
            return response.text();
        })
        .then(function(data) {

            var rows = data.trim().split(/\r?\n|\r/); // Regex to split/separate the CSV rows

            rows.forEach(function(row, row_index) {

                var columns = row.split(';');

                JourSemaine.forEach(function(jour) {

                    if ((columns[0]) != "") {
                        document.getElementById(jour + '-Midi-viande').innerHTML += "<option value=\"" + (columns[0]) + "\">" + (columns[0]) + "</option>";
                        document.getElementById(jour + '-Soir-viande').innerHTML += "<option value=\"" + (columns[0]) + "\">" + (columns[0]) + "</option>";
                    }
                    if ((columns[1]) != "") {
                        document.getElementById(jour + '-Midi-legume').innerHTML += "<option value=\"" + (columns[1]) + "\">" + (columns[1]) + "</option>";
                        document.getElementById(jour + '-Soir-legume').innerHTML += "<option value=\"" + (columns[1]) + "\">" + (columns[1]) + "</option>";
                    }

                });
            });

        });

}


function menu_semaine() {

    let test = document.getElementById("d1");
    let code = ""


    JourSemaine.forEach(function(jour) {

        // for(let i=0;i < 7; i++){

        code += '<div class="flex-item flex-' + jour + '">'
        code += '<div class=" flex-item-title ">' + jour + '</div>';

        ["Midi", "Soir"].forEach(function(moment) {

            code += '<div>' + moment + '</div><select class="menu-deroulant-viande" name="' + jour + '-' + moment + '-viande" id="' + jour + '-' + moment + '-viande"><option value=""></option></select>'
            code += '<select class="menu-deroulant-legume" name="' + jour + '-' + moment + '-legume" id="' + jour + '-' + moment + '-legume"><option value=""></option></select>'
            if (moment == "Midi") { //pour n'afficher uniquement le séparateur entre le midi et le soir
                code += ' <div class="separateur"></div>'
            }
        });
        code += '</div>'

    });

    code += '<input type="button" class="bouton_valider" value="Faire mes courses" onclick="getValue()">'

    test.innerHTML = code

    // une fois le code de la page inscrit, remplissage des menus roulants : 
    liste_deroulantes()
}



function getValue() {


    // Sélectionner l'élément output et récupérer sa valeur
    var output = '';
    var test;

    JourSemaine.forEach(function(jour) {

        ["Midi", "Soir"].forEach(function(moment) {

            if (document.getElementById(jour + '-' + moment + '-viande').value != "") { output += document.getElementById(jour + '-' + moment + '-viande').value + ',' };
            if (document.getElementById(jour + '-' + moment + '-legume').value != "") { output += document.getElementById(jour + '-' + moment + '-legume').value + ',' };

        });
    });

    output = output.substring(0, output.length - 1); // supprime le fernier caractère ";"
    alert(filterArray(output.split(','))); // met en tableau puis supprime les doublons


    // let d1 = document.getElementById("d1");
    // d1.style.display = "none";

    // let D2 = document.getElementById("complement");
    // D2.style.display = "flex";


}


//  Suppression des doublon dans un tableau
function filterArray(inputArr) {
    var found = {};
    var out = inputArr.filter(function(element) {
        return found.hasOwnProperty(element) ? false : (found[element] = true);
    });
    return out;
}