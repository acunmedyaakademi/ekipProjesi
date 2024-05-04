const cards = document.querySelector(".cards");
const details = document.querySelector(".details");
const menuler = document.querySelector(".menuTatlilar");
const menuKahveler = document.querySelector(".menuKahveler");

async function getItem(){
    const response = await fetch("assets/json/data.json");
    const data = await response.json()
    return data;
}

async function printItem(){
    const data = await getItem();
    console.log(data.tatlilar);
    data.tatlilar.forEach(tatli => {
        menuler.innerHTML +=
        `
                <div class="menu">
                    <img src="${tatli.img}" alt="" class="photo">
                    <div class="description">
                        <div class="header-price">
                            <h4>${tatli.name}</h4>
                            <span>${tatli.price}</span>
                        </div>
                        <p>${tatli.description}</p>
                    </div>
                </div>
        </details>


        `
    });
    data.sogukKahveler.forEach(coffee => {
        menuKahveler.innerHTML += 
        `
                <div class="menu">
                    <img src="${coffee.img}" alt="" class="photo">
                    <div class="description">
                        <div class="header-price">
                            <h4>${coffee.name}</h4>
                            <span>${coffee.price}</span>
                        </div>
                        <p>${coffee.description}</p>
                    </div>
                </div>

        `
    });

}

printItem();