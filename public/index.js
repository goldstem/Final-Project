var allItems = [];

window.addEventListener('DOMContentLoaded', function(){
    addItemsToArray();
})

function insertItem(name, rarity, element, ammo, season){
    var itemContext = {
        name: name,
        rarity: rarity,
        element: element,
        ammo: ammo,
        season: season
    }

    var itemHtml = Handlebars.templates.item(itemContext)

    var container = document.querySelector("twit-container")

    container.insertAdjacentHTML('beforeend', itemHtml);
}

function addItemsToArray(){
    
}

function expandDetails(button){
    var content = button.target.nextElementSibling
    if (content.style.display === "block") {
         content.style.display  = "none";
    } 
    else {
        content.style.display  = "block";
    }
}
    

window.addEventListener('DOMContentLoaded', function (){
    var buttons = document.querySelectorAll("button")
    buttons.forEach(button => {
        button.addEventListener("click", expandDetails)
    })
})


