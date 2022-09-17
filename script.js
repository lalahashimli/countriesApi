let search = document.getElementById("search");
let container = document.getElementById("container");
let error = document.getElementById("error");


search.addEventListener("keyup",function() {
    container.innerHTML = '';
    error.innerText = "";
    console.log(search.value)

    if(search.value.length > 1) {
        let endpoint = "https://restcountries.com/v3.1/name/" + search.value ;
        let xhr = new XMLHttpRequest() ;
        xhr.addEventListener("readystatechange", function() {
            if(xhr.readyState == 4) {
        
                let data = JSON.parse(xhr.response)
                if(xhr.status == 404 && data.message == "Not Found")  {
                    
                    error.innerText = "No countries found"
                    return;
                }
                let countries = "";
                for(let country of data) {
                    console.log(data)
                    countries += 
                     `<div class="card rm bm">
                     <img class="flag" src="${country.flags.png}" alt="" class="flag">
                     <div>
                     <div class="name lm"> ${country.name.common} </div>
                     <div class="capital lm"> ${country.capital}</div>
                     <div class="languages lm"> ${Object.values(country.languages)}</div>
                     </div>
                     </div> `
                  
                } 
                container.innerHTML = countries
            }  
        });
        xhr.open("GET", endpoint);
        xhr.send();
    }
})


// with fetch

// let search = document.getElementById("search");
// let container = document.getElementById("container");
// let error = document.getElementById("error");


// search.addEventListener("keyup",function() {
//     container.innerHTML = '';
//     error.innerText = "";
//     console.log(search.value)

//     if(search.value.length > 1) {
//         let endpoint = "https://restcountries.com/v3.1/name/" + search.value ;

//         fetch(endpoint) 
//         .then(response => response.json())
//         .then(result => {
           
//             if(result.status == 404 && result.message == "Not Found")  {
                
//                 error.innerText = "No countries found"
//                 return;
//             }
//             let countries = "";
//             for(let country of result) {
//                 // console.log(data)
//                 countries += 
//                  `<div class="card rm bm">
//                  <img class="flag" src="${country.flags.png}" alt="" class="flag">
//                  <div>
//                  <div class="name lm"> ${country.name.common} </div>
//                  <div class="capital lm"> ${country.capital}</div>
//                  <div class="languages lm"> ${Object.values(country.languages)}</div>
//                  </div>
//                  </div> `;
              
//             } 
//             container.innerHTML = countries
//         });

//     }
// })

