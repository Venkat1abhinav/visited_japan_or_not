let countEl1 = document.getElementById("count-el1")
let countEl2 = document.getElementById("count-el2")
let ratioEl = document.getElementById("ratioCounter")
let count1 = 0
let count2 = 0
let ratio = 0
let total = 0

function increment1() {
    count1 += 1
    countEl1.textContent = count1
    currentRatio()
}

function increment2() {
    count2 += 1
    countEl2.textContent = count2
    currentRatio()
}

function currentRatio(){
    
    ratioPercent = (count1-count2)/(count1+count2)*100
    ratioEl.textContent = ratioPercent + "%" +" did visit japan"
    
    
}
