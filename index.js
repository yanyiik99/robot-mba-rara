 //Function Fetch API ke advice 

const clickRamalan = document.getElementById("clickRamalan");


clickRamalan.addEventListener("click", ()=>{



  async function ramalan(){

    // AOS.init({
    //   once: true,
    // });

    const response = await 
    fetch("https://api.adviceslip.com/advice", {
    method: "GET"
    });

    const json = await response.json();
    console.log(json);
    const results =  json.slip.advice; // Pesan Ramalananya
    
    
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



    // Translate API
    // const bahan = '[{"Text":"' + results +'"}]';
    const soureText = `[{"Text": "${results}"}]`;
    
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '43622e8775msh30b86e8dad97a81p14b9e0jsnf658c5965102',
        'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
      },
      body: soureText
    };

    const translate = await fetch('https://microsoft-translator-text.p.rapidapi.com/translate?to%5B0%5D=id&api-version=3.0&profanityAction=NoAction&textType=plain', options)
      .then(response => response.json())
      .then(response => {
        return `"${response[0].translations[0].text}"`;})
      .catch(err => console.error(err));
      
    
    
    const ramalan = document.getElementById("ramalan");
    ramalan.innerHTML = translate;
    ramalan.style.fontFamily = "'Permanent Marker', cursive";
    ramalan.style.fontSize = "24px";
    ramalan.style.display = "block";

    AOS.init({once: true});



    // fetch('https://microsoft-translator-text.p.rapidapi.com/translate?to%5B0%5D=id&api-version=3.0&profanityAction=NoAction&textType=plain', options)
    //   .then(response => response.json())
    //   // .then(callAOS())
    //   .then(response => {
    //       //Menampilkan hasil ramalan
    //       const ramalan = document.getElementById("ramalan");
    //       ramalan.innerHTML = `" ${response[0].translations[0].text} "`;
    //       ramalan.style.fontFamily = "'Permanent Marker', cursive";
    //       ramalan.style.fontSize = "24px";
    //       ramalan.style.display = "block";})
    //   .catch(err => console.error(err));



  }
  ramalan();


});
