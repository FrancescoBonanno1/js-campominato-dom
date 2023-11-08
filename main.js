//andiamo a recuperare classi e formattazioni con create element e classlist add, generiamo un ciclo for per fare il lavoro sporco al posto nostro
let contenitore = document.getElementById("contenitore");
let numerocelle = 80;

//ora voglio impostare le difficoltà e legarle ad un ciclo o ad una funzione che mi crei le celle desiderate


for (let i = 1; i<= numerocelle; i++) {
    const cella = document.createElement("div");
    cella.classList.add("formattazione");
    cella.innerText = (i);
    
    document.getElementById("btnGO").addEventListener("click", function(){
        contenitore.appendChild(cella);
        console.log(i);
        
    })
    
    cella.addEventListener("click", function() {
        cella.classList.toggle("colorecelle")
    console.log("hai cliccato la cella :" + i)});
}