function displayElement(){
    finalOutput="";
    var elementInitial = document.getElementById("firstElement").value;
    var elementApplied = document.getElementById("secondElement").value;

    if (elementInitial == "Pyro" && elementApplied == "Cryo"){
        finalOutput="Reverse melt - 1.5x damage multiplier"
    }
    if (elementInitial == elementApplied){
        finalOutput="No reaction"
    }
    if (elementApplied == "Anemo" && elementInitial!="Anemo" || elementApplied != "Anemo" && elementInitial=="Anemo"){
        finalOutput="Swirl - Additional damage dealt depending on Elemental Mastery and Character Level"
    } 
    if (elementInitial == "Cryo" && elementApplied == "Pyro"){
        finalOutput="Melt. 2x damage multiplier"
    }
    if (elementInitial == "Pyro" && elementApplied == "Hydro"){
        finalOutput="Vaporize - 2x damage multiplier"
    }
    if (elementInitial == "Hydro" && elementApplied == "Pyro"){
        finalOutput="Reverse Vaporize - 1.5x damage multiplier"
    }
    if (elementInitial !="Geo" && elementApplied == "Geo" || elementApplied != "Geo" && elementInitial=="Geo"){
        finalOutput="Crystallize - Generates a shield crystal"
    }
    if (elementInitial == "Electro" && elementApplied == "Pyro" || elementInitial =="Pyro" && elementApplied =="Electro"){
        finalOutput="Overloaded - Fixed damage based on Elemental Mastery and Character Level"
    }
    if (elementInitial == "Hydro" && elementApplied == "Electro" || elementInitial == "Electro" && elementApplied == "Hydro"){
        finalOutput="Electro-charged - Fixed damage based on Elemental Mastery and Character Level"
    }

    if (elementInitial == "Electro" && elementApplied == "Cryo" || elementInitial == "Cryo" && elementApplied == "Electro"){
        finalOutput="Superconduct - Decreases physical resistance"
    }

    if (elementInitial == "Hydro" && elementApplied == "Cryo" || elementInitial == "Cryo" && elementApplied == "Hydro"){
        finalOutput="Freeze"
    }




    reaction.textContent = finalOutput;
}