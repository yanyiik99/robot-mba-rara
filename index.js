 //Function Fetch API ke advice 

const clickRamalan = document.getElementById("clickRamalan");


clickRamalan.addEventListener("click", ()=>{

  async function ramalan(){
        
    const response = await 
    fetch("https://api.adviceslip.com/advice", {
    method: "GET"
    });

    const json = await response.json();
    console.log(json);
    const results =  json.slip.advice; // Pesan Ramalananya
    
      //Menampilkan hasil ramalan
    const ramalan = document.getElementById("ramalan");
    ramalan.innerHTML = `"${results}"`;
    ramalan.style.fontFamily = "'Permanent Marker', cursive";
    ramalan.style.fontSize = "24px";
    ramalan.style.display = "block";

      //Menampilkan hasil Nama
    const nama = document.getElementById("nama").value;
    const tampilNama = document.getElementById("tampilNama");

    //Menghilangkan Form setelah click tombol ramal 
    const inputNama = document.getElementById("inputNama").style.display = "none";

    
    //Menampilkan Nama
    tampilNama.innerHTML = `Hai ${nama}`;

    tampilNama.style.textAlign = "center";
    tampilNama.style.paddingBottom = "40px";
    tampilNama.style.fontFamily = "'Permanent Marker', cursive";

    AOS.init({
      once: true,
    });

  }

  ramalan();

  


});
