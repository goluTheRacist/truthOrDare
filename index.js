var q;
function new_qstn(){
    fetch("https://api.truthordarebot.xyz/api/nhie",{method:"GET"})
    .then((response)=>response.json())
    .then(data=>{q = data.question})
    
    q='Loading...'
}

new_qstn()

setInterval(()=>{
    document.getElementById('qstn').innerText=q
})

document.getElementsByTagName('button')[0].addEventListener('click',new_qstn)