
let inputval=document.getElementById('inputtext');
function display(){
    localStorage.setItem("entertext",inputval.value)
    

}
if(localStorage.getItem("entertext")){
    inputval.textContent=localStorage.getItem('entertext')
}


inputval.addEventListener('input', display);
