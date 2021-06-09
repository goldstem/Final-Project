var allKinetic = ["Fatebringer","Cryosthesia 77K","Chroma Rush","Ignition Code","Fatebringer","Fatebringer (Timelost)","Survivor's Epitaph",
"Hung Jury SR4","Hung Jury SR4 (Adept)", "Riiswalker", "Farewell", "Praedyth's Revenge", "Praedyth's Revenge (Timelost)"];

var allEnergy = ["Vex Mythoclast","The Number","Null Composure","PLUG ONE.1","PLUG ONE.1 (Adept)","Empty Vessel","Finite Impactor","Gridskipper",
"Pleiades Corrector","Vision of Confluence","Vision of Confluence (Timelost)","Found Verdict","Found Verdict (Timelost)","Sojourner's Tale",
"The Deicide","The Vision","Occluded Finality","Uzume RR4","Uzume RR4 (Adept)","Borrowed Time","Shayura's Wrath","Shayura's Wrath (Adept)","Stochastic Variable",]

var allHeavy = ["Crown-Splitter","Quickfang","Eternity's Edge","Memory Interdict","Archon's Thunder","Corrective Measure","Corrective Measure (Timelost)",
"Shattered Cipher","Hezen Vengeance","Hezen Vengeance (Timelost)",]

var allLoadouts = []

window.addEventListener('DOMContentLoaded', function(){
    var kineticSelect = document.getElementById("kinetic")
    RallKinetic = allKinetic.reverse()
    for(var i = 0; i < allKinetic.length; i++){
        var option = document.createElement('option')
        option.text = option.value = RallKinetic[i]
        kineticSelect.add(option, 0)
    }
    allKinetic.reverse()
    var energySelect = document.getElementById("energy")
    RallEnergy = allEnergy.reverse()
    for(var i = 0; i < allEnergy.length; i++){
        var option = document.createElement('option')
        option.text = option.value = RallEnergy[i]
        energySelect.add(option, 0)
    }
    allEnergy.reverse()
    var heavySelect = document.getElementById("heavy")
    RallHeavy = allHeavy.reverse()
    for(var i = 0; i < allHeavy.length; i++){
        var option = document.createElement('option')
        option.text = option.value = RallHeavy[i]
        heavySelect.add(option, 0)
    }
    allHeavy.reverse()
})


var openModal = document.getElementsByClassName("open-loadouts")[0]
openModal.onclick = function (){
    var id = document.getElementsByClassName("hidden")
    for(var i = 0; i < id.length; i++){
        id[i].style.display = 'block'
    }
}

var closeModal = document.getElementsByClassName("cancel-button")[0]
closeModal.onclick = function (){
    var id = document.getElementsByClassName("hidden")
    for(var i = 0; i < id.length; i++){
        id[i].style.display = 'none'
    }
}

var acceptModal = document.getElementsByClassName("accept-button")[0]
acceptModal.onclick = function (){
    createLoadout()

    var id = document.getElementsByClassName("hidden")
    for(var i = 0; i < id.length; i++){
        id[i].style.display = 'none'
    }
}

function createLoadout() {
    var kineticChocice = document.getElementById("kinetic").selectedIndex
    console.log(kineticChocice)
    var energyChoice = document.getElementById("energy").selectedIndex
    var heavyChoice = document.getElementById("heavy").selectedIndex

    var loadout = {
        kinetic: allKinetic[kineticChocice],
        energy: allEnergy[energyChoice],
        heavy: allHeavy[heavyChoice]
    }

    allLoadouts.push(loadout)
    printLoadouts(loadout)
}

function printLoadouts(loadout) {
    var container = document.getElementsByClassName("loadout-container")[0]

    var loadoutContext = loadout
    var loadoutHtml = Handlebars.templates.loadout(loadoutContext)
    container.insertAdjacentHTML('beforeend', loadoutHtml)
}