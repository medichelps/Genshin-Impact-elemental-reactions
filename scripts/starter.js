var elementApplied=""
var elementInitial=""
var element=""
function displayElement(){
    finalOutput="";
    
    
    
    if (elementInitial == "Pyro" && elementApplied == "Cryo"){
        finalOutput="Reverse melt - 1.5x damage multiplier"
    }
    else if (elementInitial == elementApplied){
        finalOutput="No reaction"
    }
    else if (elementApplied == "Anemo" && elementInitial!="Anemo" || elementApplied != "Anemo" && elementInitial=="Anemo"){
        finalOutput="Swirl - Additional damage dealt depending on Elemental Mastery and Character Level"
    } 
    else if (elementInitial == "Cryo" && elementApplied == "Pyro"){
        finalOutput="Melt - 2x damage multiplier"
    }
    else if (elementInitial == "Pyro" && elementApplied == "Hydro"){
        finalOutput="Vaporize - 2x damage multiplier"
    }
    else if (elementInitial == "Hydro" && elementApplied == "Pyro"){
        finalOutput="Reverse Vaporize - 1.5x damage multiplier"
    }
    else if (elementInitial !="Geo" && elementApplied == "Geo" || elementApplied != "Geo" && elementInitial=="Geo"){
        finalOutput="Crystallize - Generates a shield crystal"
    }
    else if (elementInitial == "Electro" && elementApplied == "Pyro" || elementInitial =="Pyro" && elementApplied =="Electro"){
        finalOutput="Overloaded - Fixed damage based on Elemental Mastery and Character Level"
    }
    else if (elementInitial == "Hydro" && elementApplied == "Electro" || elementInitial == "Electro" && elementApplied == "Hydro"){
        finalOutput="Electro-charged - Fixed damage based on Elemental Mastery and Character Level"
    }

    else if (elementInitial == "Electro" && elementApplied == "Cryo" || elementInitial == "Cryo" && elementApplied == "Electro"){
        finalOutput="Superconduct - Decreases physical resistance"
    }

    else if (elementInitial == "Hydro" && elementApplied == "Cryo" || elementInitial == "Cryo" && elementApplied == "Hydro"){
        finalOutput="Freeze"
    }
    else{
        finalOutput="no worky"
    }




    reaction.textContent = finalOutput;
}
// add 7 //

function appliedElementAnemo(){
    unselect()
    elementApplied="Anemo";   
    var element = document.querySelectorAll(".elementApp")[0];
    element.classList.toggle("clicked")
}

function appliedElementPyro(){
    unselect()
    elementApplied="Pyro";   
    var element = document.querySelectorAll(".elementApp")[1];
    element.classList.toggle("clicked");
}

function unselect(){
    var deselector = document.querySelectorAll(".elementApp");
    for (var i=0; i< deselector.length; i++){
     deselector[i].classList.remove("clicked")
    }
}
function appliedElementGeo(){
    unselect()
    elementApplied="Geo";   
    var element = document.querySelectorAll(".elementApp")[4];
    element.classList.toggle("clicked");
}
function appliedElementCryo(){
    unselect()
    elementApplied="Cryo";   
    var element = document.querySelectorAll(".elementApp")[2];
    element.classList.toggle("clicked");
}
function appliedElementHydro(){
    unselect()
    elementApplied="Hydro";   
    var element = document.querySelectorAll(".elementApp")[3];
    element.classList.toggle("clicked");
}
function appliedElementElectro(){
    unselect()
    elementApplied="Electro";   
    var element = document.querySelectorAll(".elementApp")[5];
    element.classList.toggle("clicked");
}

// initial

function unselectInitial(){
    var deselectorInitial = document.querySelectorAll(".elementInit");
    for (var j=0; j< deselectorInitial.length; j++){
     deselectorInitial[j].classList.remove("clicked")
    }
}


function initialElementAnemo(){
    unselectInitial()
    elementInitial="Anemo";   
    var element = document.querySelectorAll(".elementInit")[0];
    element.classList.toggle("clicked");
}
function initialElementPyro(){
    unselectInitial()
    elementInitial="Pyro";   
    var element = document.querySelectorAll(".elementInit")[1];
    element.classList.toggle("clicked");
}
function initialElementCryo(){
    unselectInitial()
    elementInitial="Cryo";   
    var element = document.querySelectorAll(".elementInit")[2];
    element.classList.toggle("clicked");
}
function initialElementHydro(){
    unselectInitial()
    elementInitial="Hydro";   
    var element = document.querySelectorAll(".elementInit")[3];
    element.classList.toggle("clicked");
}
function initialElementGeo(){
    unselectInitial()
    elementInitial="Geo";   
    var element = document.querySelectorAll(".elementInit")[4];
    element.classList.toggle("clicked");
}
function initialElementElectro(){
    unselectInitial()
    elementInitial="Electro";   
    var element = document.querySelectorAll(".elementInit")[5];
    element.classList.toggle("clicked");
}