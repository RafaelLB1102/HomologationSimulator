const technologies = {
    "Tecnico en automatización industrial" : "TIA",
    "Tecnico en inteligencia artifical" : "IA"
}
const majorList = {
    "Ing. Sistemas" : "ingSis"
    ,"Ing. Mecánica" : "ingMec"
}

const majorId = majorList["Ing. Sistemas"]

document.addEventListener("DOMContentLoaded", function(){
    const techDropdown = document.getElementById("TechDropDown")

    for (let techKey in technologies){
        const element = document.createElement("option")
        element.text = techKey
        element.value = technologies[techKey]
        techDropdown.add(element)
    }
})

function getCredits(technologyId,majorId) {
    return {
        Credits : 170,
        Passed : 14
    }
}
  

function drawProgressChart(total, avance) {
    const chartContainer = document.getElementById('chart');
    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, 'svg');
    const circleTotal = document.createElementNS(svgNS, 'circle');
    const circleAvance = document.createElementNS(svgNS, 'circle');
    const textTotal = document.createElementNS(svgNS, 'text');
    const textAvance = document.createElementNS(svgNS, 'text');
    
    const centerX = 110; /* Ajustamos el centro en relación al nuevo tamaño */
    const centerY = 110; /* Ajustamos el centro en relación al nuevo tamaño */
    const radius = 100; /* Aumentamos el radio del círculo */
    const strokeWidth = 20;
    
    // Calcular ángulos
    const totalAngle = (total / 100) * 360;
    const avanceAngle = (avance / total) * totalAngle;
    
    // Ajustar el tamaño del SVG para que quepa completamente dentro del contenedor
    svg.setAttribute('width', '220');
    svg.setAttribute('height', '220');
    
    // Crear círculo de fondo (total)
    circleTotal.setAttribute('cx', centerX);
    circleTotal.setAttribute('cy', centerY);
    circleTotal.setAttribute('r', radius);
    circleTotal.setAttribute('stroke', '#B2B2B2');
    circleTotal.setAttribute('stroke-width', strokeWidth);
    circleTotal.setAttribute('fill', 'none');
    
    // Crear círculo de avance
    circleAvance.setAttribute('cx', centerX);
    circleAvance.setAttribute('cy', centerY);
    circleAvance.setAttribute('r', radius);
    circleAvance.setAttribute('stroke', '#0069A3');
    circleAvance.setAttribute('stroke-width', strokeWidth);
    circleAvance.setAttribute('fill', 'none');
    circleAvance.setAttribute('stroke-dasharray', `${avanceAngle}, ${totalAngle}`);
    
    // Crear texto de total
    textTotal.setAttribute('x', centerX);
    textTotal.setAttribute('y', centerY - 10);
    textTotal.setAttribute('text-anchor', 'middle');
    textTotal.setAttribute('fill', '#000');
    textTotal.textContent = `${total} cred. Totales`;
    
    // Crear texto de avance
    textAvance.setAttribute('x', centerX);
    textAvance.setAttribute('y', centerY + 20);
    textAvance.setAttribute('text-anchor', 'middle');
    textAvance.setAttribute('fill', '#000');
    textAvance.textContent = `${avance} cred. Homologados`;
    
    // Añadir elementos al SVG
    svg.appendChild(circleTotal);
    svg.appendChild(circleAvance);
    svg.appendChild(textTotal);
    svg.appendChild(textAvance);
    
    // Añadir SVG al contenedor
    chartContainer.appendChild(svg);
}

function showCredits(){
    const techDropdownValue = document.getElementById("TechDropDown").value
    const fullCreditsParagraph = document.getElementById("FullCredits")
    const passedCreditsParagraph = document.getElementById("PassedCredits")
    const percentageOfComplitionParagraph = document.getElementById("PercentageOfComplition")
    let credits = getCredits(techDropdownValue, majorId)
    fullCreditsParagraph.innerText = `Créditos completos : ${credits.Credits}`
    passedCreditsParagraph.innerText = `Créditos homologados : ${credits.Passed}`
    percentageOfComplitionParagraph.innerText = `Porcentage homologado : ${Math.floor((credits.Passed/credits.Credits) * 100)}`
    drawProgressChart(credits.Credits, credits.Passed);
}    
// Llamar a la función con valores de ejemplo (total, avance)



