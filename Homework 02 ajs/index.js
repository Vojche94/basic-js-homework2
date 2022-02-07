async function getPlanets (url) {
    try {
    let result=await fetch(url);
    let planets=await result.json()
    let planetsArray=planets.results
    console.log(planetsArray)
    getData(planetsArray)
    

    } catch(error){
    console.log(error)
    }

}


let getData=(array)=> {
let ColsNames=["Planet Names","Population","Climate","Gravity"]
let tableHead=document.createElement("thead")
let tbody=document.createElement("tbody")
let table=document.createElement("table")
let theadRow=document.createElement("tr")
let body=document.getElementsByTagName("body")[0]
    
for(cols of ColsNames){
let th=document.createElement("th")
theadRow.appendChild(th)
th.textContent=cols
th.style.border="1px solid black"

}
tableHead.appendChild(theadRow)
table.appendChild(tableHead)

for (plant of array){
    let tr=document.createElement("tr")
    
    let pNamesTd=document.createElement("td")
    pNamesTd.style.border="1px solid black"
    pNamesTd.textContent=plant.name
    tr.appendChild(pNamesTd)

    let populationTd=document.createElement("td")
    populationTd.style.border="1px solid black"
    populationTd.textContent=plant.population
    tr.appendChild(populationTd)

    let climateTd=document.createElement("td")
    climateTd.style.border="1px solid black"
    climateTd.textContent=plant.climate
    tr.appendChild(climateTd)

    let gravityTd=document.createElement("td")
    gravityTd.style.border="1px solid black"
    gravityTd.textContent=plant.gravity
    tr.appendChild(gravityTd)
    tbody.appendChild(tr)
  
}

table.appendChild(tbody)
body.appendChild(table)


}

let button2=document.createElement("button")
let body=document.getElementsByTagName("body")[0]
let button1=document.createElement("button")
let button=document.getElementById("button")

button.addEventListener("click",() => {
getPlanets("https://swapi.dev/api/planets/?page=1")
button1.textContent="Next 10"
body.parentNode.insertBefore(button1, body.nextSibling)

  
})



button1.addEventListener("click",()=>{
body.innerHTML=""
let h1=document.createElement("h1")
body.appendChild(h1)
h1.textContent="Star Wars Planets"
getPlanets("https://swapi.dev/api/planets/?page=2")
button1.style.visibility ="hidden"
body.parentNode.insertBefore(button2, body.nextSibling)
button2.textContent="Previous 10"
button2.style.visibility = "visible"


        
        
})

button2.addEventListener("click",()=>{
body.innerHTML=""
let h1=document.createElement("h1")
body.appendChild(h1)
h1.textContent="Star Wars Planets"
getPlanets("https://swapi.dev/api/planets/?page=1")
button2.style.visibility = "hidden"
button1.style.visibility="visible"

     
})











