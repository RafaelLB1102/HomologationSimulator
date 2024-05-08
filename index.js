const technologies = ["prueba","prueba2"]
const majorList = ["Ing. Sistemas","Ing. Mecánica"]
document.addEventListener("DOMContentLoaded", function(){
    const techDropdown = document.getElementById("TechDropDown")
    const majorDropdown = document.getElementById("MajorsDropDown")
    technologies.forEach((technology) => {
        const element = document.createElement("option")
        element.text = technology
        techDropdown.add(element)
    })
    majorList.forEach((major) => {
        const element = document.createElement("option")
        element.text = major
        majorDropdown.add(element)
    })
})