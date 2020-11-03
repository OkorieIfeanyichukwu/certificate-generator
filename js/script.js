function onchange(e){
    if(e.currentTarget.value==='default'){
        window.location.reload(true);
    }
}

document.getElementById('default').addEventListener('change',onchange);