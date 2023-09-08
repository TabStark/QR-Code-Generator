let input = document.getElementById("inp")
let img = document.getElementById("img")
let p = document.getElementById("comment")
let p1 = document.getElementById("comment2")

myfun=()=>{
    resetState()
    p.style.display="block"
   
    let value = input.value
   
    if(value){

        img.style.display="block"
        img.src =` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${value} `
    }
        setTimeout(() => {
            p.innerHTML="QR Code Genererated"
        }, 1000);
        
    }


function resetState(){
    p.innerHTML="Generating..."
    img.src=``
}
