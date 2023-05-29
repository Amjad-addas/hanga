let bankOfWorld=["مكدوس","امجد","حلب","شارع","جامعة","يلحمار" ,"سيارة","تسعوخمسين"]
let world=document.getElementById("world")
let counter = 0;
let r=0
let j = Math.floor(Math.random() * bankOfWorld.length) + 1
j--
let ding1 = new Audio('./src/yes.aac');
let ding = new Audio('./src/no.aac');
let numbeerOfGuess=0
let liLettar = document.querySelectorAll("li")
liLettar.forEach(li => {
    li.addEventListener("click", tap)
});
function startGame(bow){
    bow=bankOfWorld[j]
    let worldLength= bow.split("")

 
    for(let i=0 ; i< worldLength.length ; i++){
         
        let dashSpan=document.createElement("span")
        dashSpan.classList.add("dash")
        let DIV = document.createElement("div")
        DIV.classList.add("world-w")
        DIV.appendChild(dashSpan)
        world.appendChild(DIV)
    }
    return bow
}
function tap(e){

    let tapTarget= e.target.innerText
    e.target.style.display="none"
    let gusse = bankOfWorld[j].split("")
    for(let i=0 ; i<gusse.length;i++){
        if(tapTarget ==gusse[i]){
            r++
            
            ding1.play();
            let wC= document.getElementById("world-container")
            wC.style.marginTop="50px"
            let adding=document.querySelectorAll(".world-w")
            let w = document.createElement("span")
            w.classList.add("let")
            w.innerText=tapTarget
            adding[i].appendChild(w)
            counter++
            if(r==bankOfWorld[j].split("").length){
                document.getElementById("secound").classList.add("secound-a")
                document.getElementById("pop").style.display="block"
                document.getElementById("text").innerText=" ابوس روح الفهايم  صح الكلمة هي" +" "+bankOfWorld[j]
            }
        }

       
    }
    if(counter==0){

        ding.play();
        numbeerOfGuess++
        document.getElementById("cont").style.justifyContent="space-between"
        document.getElementById("hanga").style.display="block"
        if(numbeerOfGuess==1){
            document.getElementById("one").style.display="block"
        }else if(numbeerOfGuess==2){
            document.getElementById("tow").style.display="block"
        }else if(numbeerOfGuess==3){
            document.getElementById("three").style.display="block"
        }
        else if(numbeerOfGuess==4){
            document.getElementById("four").style.display="block"
        }
        else if(numbeerOfGuess==5){
            document.getElementById("first").classList.add("dis")
            document.getElementById("secound").classList.add("dis")
        }
        else if(numbeerOfGuess==6){
            document.getElementById("first").classList.add("first-b")
            
        }
        else if(numbeerOfGuess==7){
            document.getElementById("first").classList.add("first-a")
        }
        else if(numbeerOfGuess==8){
            document.getElementById("secound").classList.add("secound-b")
        }
        else if(numbeerOfGuess==9){
            document.getElementById("secound").classList.add("secound-a")
            document.getElementById("pop").style.display="block"
            document.getElementById("text").innerText="لعادة طشي ع الاخير مبينة انو الكلمة هي "+bankOfWorld[j]
            

        }
              
    }

    
    counter=0
    
}
document.getElementById("btn").addEventListener("click",function(){
    location.reload()
})
startGame()