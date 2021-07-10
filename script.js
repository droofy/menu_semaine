// Attendre que la page soit chargée pour remplir les listes déroulantes
function domReady(f) {
    if (document.readyState === 'complete') {
      f();
    } else {
      document.addEventListener('DOMContentLoaded', f);
    }
  }
  
  domReady(function() {
    liste_deroulantes();
  });


// Remplissage des listes déroulantes
function liste_deroulantes(){

fetch('plats.csv')
    .then(function(response){
        return response.text();
    })
    .then(function(data){
        csv_string_to_table(data);
    });

}




function csv_string_to_table(csv_string) {
    var rows = csv_string.trim().split(/\r?\n|\r/); // Regex to split/separate the CSV rows

    rows.forEach(function(row, row_index) {

        var columns = row.split(';'); 

        ["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"].forEach(function(jour){

            if((columns[0])!= ""){
                document.getElementById(jour+'-midi-viande').innerHTML += "<option value=\"" + (columns[0]) + "\">" + (columns[0])  + "</option>";
                document.getElementById(jour+'-soir-viande').innerHTML += "<option value=\"" + (columns[0]) + "\">" + (columns[0])  + "</option>";
            }
            if((columns[1])!= ""){
                document.getElementById(jour+'-midi-legume').innerHTML += "<option value=\"" + (columns[1]) + "\">" + (columns[1])  + "</option>";
                document.getElementById(jour+'-soir-legume').innerHTML += "<option value=\"" + (columns[1]) + "\">" + (columns[1])  + "</option>";
            }

        });
    });

}

function getValue() {
    

    // Sélectionner l'élément output et récupérer sa valeur
    var output = '';
    var test;
    
    ["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"].forEach(function(jour){
     
            if( document.getElementById(jour+'-midi-viande').value != ""){output += document.getElementById(jour+'-midi-viande').value + ','};
            if( document.getElementById(jour+'-midi-legume').value != ""){output += document.getElementById(jour+'-midi-legume').value + ','};
            if( document.getElementById(jour+'-soir-viande').value != ""){output += document.getElementById(jour+'-soir-viande').value + ','};
            if( document.getElementById(jour+'-soir-legume').value != ""){output += document.getElementById(jour+'-soir-legume').value + ','};
            
    });
    
    output = output.substring(0, output.length - 1); // supprime le fernier caractère ";"
    alert (filterArray(output.split(','))); // met en tableau puis supprime les doublons
}


//  Suppression des doublon dans un tableau
function filterArray(inputArr){
    var found ={};
    var out = inputArr.filter(function(element){
        return found.hasOwnProperty(element)? false : (found[element]=true);
    });
    return out;
}















