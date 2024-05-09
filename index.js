const technologies = {
    "Tecnico en automatización industrial" : "TIA",
    "Tecnico en inteligencia artifical" : "IA"
}
const majorList = {
    "Ing. Sistemas" : "ingSis"
    ,"Ing. Mecánica" : "ingMec"
}

document.addEventListener("DOMContentLoaded", function(){
    const techDropdown = document.getElementById("TechDropDown")
    const majorDropdown = document.getElementById("MajorsDropDown")

    for (let techKey in technologies){
        const element = document.createElement("option")
        element.text = techKey
        element.value = technologies[techKey]
        techDropdown.add(element)
    }

    for (let majorKey in majorList){
        const element = document.createElement("option")
        element.text = majorKey
        element.value = majorList[majorKey]
        majorDropdown.add(element)
    }
})

function getCredits(technologyId,majorId) {
    return {
        Credits : 170,
        Passed : 14
    }
}
  
function showCredits(){
    const techDropdownValue = document.getElementById("TechDropDown").value
    const majorDropdownValue = document.getElementById("MajorsDropDown").value
    const fullCreditsParagraph = document.getElementById("FullCredits")
    const passedCreditsParagraph = document.getElementById("PassedCredits")
    const percentageOfComplitionParagraph = document.getElementById("PercentageOfComplition")
    let credits = getCredits(techDropdownValue, majorDropdownValue)
    fullCreditsParagraph.innerText = `Créditos completos : ${credits.Credits}`
    passedCreditsParagraph.innerText = `Créditos homologados : ${credits.Passed}`
    percentageOfComplitionParagraph.innerText = `Porcentage homologado : ${Math.floor((credits.Passed/credits.Credits) * 100)}`
}    

