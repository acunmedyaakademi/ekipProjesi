const cards = document.querySelector(".cards");
const menuler = document.querySelector(".menuler");
async function getItem(){
    const response = await fetch("assets/json/data.json");
    const data = await response.json()
    return data;
}


async function printItem(){
    const data = await getItem();
    console.log(data);

    data.forEach((category) => { 
        menuler.innerHTML +=
        `
        
<details class="details">
            <summary class="summary">
                <div class="cards">
                    <div class="card">
                        <h2 class="header-h2 ">${category.name}</h2>
                    </div>
                </div>
            </summary>          
            ${category.urunler.map(urun => `<div class="menu"><img class="photo" src="${urun.img}" alt=""><div class="description"><div class="header-price"><div><h4>${urun.name}</h4><span>${urun.price}</span></div><p>${urun.description}</p></div></div>` )}
</details>           
    
        `
    });
}
printItem();





