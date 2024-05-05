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
                    <img src="${category.backgroundImg}" alt="" class="img">
                    <div class="deneme">
                        <h2 class="header-h2 ">${category.name}</h2>
                    <div>
                </summary>          
                ${category.urunler.map(urun => 
                    `
                    <div class="menu">
                        <img src="${urun.img}" alt="" class="photo">
                        <div class="description">
                            <div class="header-price">
                                <h4 class="header-h4">${urun.name}</h4>
                                <span class="price">${urun.price}₺</span>
                            </div>
                            <p class="paragraph">${urun.description}</p>
                        </div>
                    </div>
                    ` 
                )}
            </details>           
        `
    });
}
printItem();





