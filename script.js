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
    

    // Sélectionner l'élément input et récupérer sa valeur
    var input = '';


    
    ["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"].forEach(function(jour){
     
            input += jour+' : ';
            input += document.getElementById(jour+'-midi-viande').value + ' / ';
            input += document.getElementById(jour+'-midi-legume').value + ' , ';
            input += document.getElementById(jour+'-soir-viande').value + ' / ';
            input += document.getElementById(jour+'-soir-legume').value + '\n';
            

            
    });

    alert(input);
}




















