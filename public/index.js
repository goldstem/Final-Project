//Array of db items converted to objects
var allItems = [];

/*
** Function to show expanded content on button click
*/
function expandDetails(button){
    var content = button.target.nextElementSibling
    if (content.style.display === "block") {
         content.style.display  = "none";
    } 
    else {
        content.style.display  = "block";
    }
}

/*
** Search function that removes/re-inserts db items from the DOM based on input
*/
function doSearch() {
    var query = document.getElementById("search-input").value
    var container = document.querySelector(".item-container")
    
    while(container.lastChild){
        container.removeChild(container.lastChild)
    }
    
    allItems.forEach(function (item) {
        if(searchQuery(item, query)){
            insertItem(item.img, item.name, item.type, item.rarity, item.element, item.ammo, item.season, item.perks1, item.perks2)
        }
    })
    addListenerAgain()
}

/*
** Function to check if items match search query, based on selected attribute
*/
function searchQuery(item, query){
    if(!query){
        return true
    }

    query = query.trim().toLowerCase()

    var option = document.getElementsByClassName("dropdown-options")[0]
    if(option.selectedIndex === 0){
        return(item.name.toLowerCase().indexOf(query) >= 0)
    }
    if(option.selectedIndex === 1){
        return(item.type.toLowerCase().indexOf(query) >= 0)
    }
    if(option.selectedIndex === 2){
        return(item.rarity.toLowerCase().indexOf(query) >= 0)
    }
    if(option.selectedIndex === 3){
        return(item.element.toLowerCase().indexOf(query) >= 0)
    }
    if(option.selectedIndex === 4){
        return(item.ammo.toLowerCase().indexOf(query) >= 0)
    }
    if(option.selectedIndex === 5){
        return(item.season.toLowerCase().indexOf(query) >= 0)
    } 
    if(option.selectedIndex === 6){
        return(item.perks1.toLowerCase().indexOf(query) >= 0 || item.perks2.toLowerCase().indexOf(query) >= 0)
    } 
}

/*
** Function to insert item into handlebars template, and then itno the html
*/
function insertItem(img, name, type, rarity, element, ammo, season, perks1, perks2){
    var itemContext = {
        img: img,
        name: name,
        type: type,
        rarity: rarity,
        element: element,
        ammo: ammo,
        season: season,
        perks1: perks1,
        perks2, perks2
    }

    var itemHtml = Handlebars.templates.item(itemContext)

    var container = document.querySelector(".item-container")

    container.insertAdjacentHTML('beforeend', itemHtml)
}

/*
** Function to convert item from JSON db to js object
*/
function convertItemToObject(itemEle){
    var item = {}

    var itemImg = itemEle.querySelector('.item-image')
    item.img = itemImg.src.trim()

    var itemName = itemEle.querySelector(".name-tag")
    item.name = itemName.textContent.trim()

    var itemType = itemEle.querySelector(".type-tag")
    item.type = itemType.textContent.trim()

    var rarityName = itemEle.querySelector(".rarity-tag")
    item.rarity = rarityName.textContent.trim()

    var elementName = itemEle.querySelector(".element-tag")
    item.element = elementName.textContent.trim()

    var ammoName = itemEle.querySelector(".ammo-tag")
    item.ammo = ammoName.textContent.trim()

    var seasonName = itemEle.querySelector(".season-tag")
    item.season = seasonName.textContent.trim()

    var perks1Name = itemEle.querySelector(".perks1-content")
    item.perks1 = perks1Name.textContent.trim()

    var perks2Name = itemEle.querySelector(".perks2-content")
    item.perks2 = perks2Name.textContent.trim()

    return item
}

/*
** Function to add click/input listeners on expand buttons and search
*/
window.addEventListener('DOMContentLoaded', function (){
    var itemCollection = document.getElementsByClassName('item')
    for(var i = 0; i < itemCollection.length; i++){
        allItems.push(convertItemToObject(itemCollection[i]))
    }

    var buttons = document.querySelectorAll("button")
    buttons.forEach(button => {
        button.addEventListener('click', expandDetails)
    })

    var search = document.getElementById("search-input")
    search.addEventListener('input', doSearch)
})

/*
** Function re-add click listener on elements that were removed from the dom
*/
function addListenerAgain(){
    var buttons = document.querySelectorAll("button")
    buttons.forEach(button => {
        button.addEventListener('click', expandDetails)
    })
}

