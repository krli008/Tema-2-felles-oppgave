const skjema = document.querySelector("#skjema");
const inpVare = document.querySelector("#inpVare");
const btnSubmit = document.querySelector("#btnSumbit");
const selectKategori = document.querySelector("#selectKategori");

const foodList = document.querySelector("#foodList");
const clothesList = document.querySelector("#clothesList");
const interiorList = document.querySelector("#interiorList");

let varer = [
    {navn: "Fisk", kategori: "mat"},
    {navn: "Brød", kategori: "mat"},
    {navn: "Egg", kategori: "mat"},
    {navn: "Vest", kategori: "klaer"},
    {navn: "Genser", kategori: "klaer"},
    {navn: "Bukse", kategori: "klaer"},
    {navn: "Bord", kategori: "interior"},
    {navn: "Stol", kategori: "interior"},
]
// I funksjonen som skal lage listene


function visVarer() {
    
    const matvarer = varer.filter( vare => vare.kategori === "mat" );
    const klaer = varer.filter( vare => vare.kategori === "klaer" );
    const interior = varer.filter( vare => vare.kategori === "interior" );

    foodList.innerHTML = "";
    for(const [indeks, vare] of matvarer.entries() ) {
        foodList.innerHTML += `
        <div>${vare.navn}</div>
        <div onClick="slett('${vare.navn}')" class="btnSlett">X</div>`;
    }

    clothesList.innerHTML = "";
    for(const [indeks, vare] of klaer.entries() ) {
       clothesList.innerHTML += `
       <div>${vare.navn}</div>
       <div onClick="slett('${vare.navn}')" class="btnSlett">X</div>`;
    }

    interiorList.innerHTML = "";
    for(const [indeks, vare] of interior.entries() ) {
        interiorList.innerHTML += `
        <div>${vare.navn}</div>
        <div onClick="slett('${vare.navn}')" class="btnSlett">X</div>`;
     }

}
visVarer();


function slett(navn) {
    
    varer = varer.filter(vare => vare.navn !== navn);

    visVarer();
}



function registrerVare(evt) {
    evt.preventDefault();
    varer.push( {navn: inpVare.value, kategori: selectKategori.value} );
    visVarer();
    skjema.reset();
}

skjema.addEventListener("submit", registrerVare);




