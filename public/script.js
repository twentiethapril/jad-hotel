const totalDays = document.getElementById('totalDays')
const totalCost = document.getElementById('totalCost')

totalDays.addEventListener('change', (e) => {
    console.log(e.target.value)
    const currentCost = 1295 * e.target.value
    if(currentCost > -1){
        totalCost.innerText = currentCost
    }
})

totalDays.addEventListener('keyup', (e) => {
    console.log(e.target.value)
    const currentCost = 1295 * e.target.value
    if(currentCost > -1){
        totalCost.innerText = currentCost
    }
})