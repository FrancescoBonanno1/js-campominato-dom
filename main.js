//andiamo a recuperare classi e formattazioni con create element e classlist add, generiamo un ciclo for per fare il lavoro sporco al posto nostro
let numerocelle = 80;
let contenitore = document.getElementById("contenitore");

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