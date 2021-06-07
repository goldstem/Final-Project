var allItems = [];

function expandDetails(button){
    var content = button.target.nextElementSibling
    if (content.style.display === "block") {
         content.style.display  = "none";
    } 
    else {
        content.style.display  = "block";
    }
}

function doSearch() {
    var query = document.getElementById("search-input").value
    var container = document.querySelector(".item-container")
    
    while(container.lastChild){
        container.removeChild(container.lastChild)
    }
    
    allItems.forEach(function (item) {
        if(searchQuery(item, query)){
            insertItem(item.img, item.name, item.type, item.rarity, item.element, item.ammo, item.season)
        }
    })
}

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
}

function insertItem(img, name, type, rarity, element, ammo, season){
    var itemContext = {
        img: img,
        name: name,
        type: type,
        rarity: rarity,
        element: element,
        ammo: ammo,
        season: season
    }

    var itemHtml = Handlebars.templates.item(itemContext)

    var container = document.querySelector(".item-container")

    container.insertAdjacentHTML('beforeend', itemHtml)
}

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

    return item
}
    

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

