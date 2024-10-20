
function message() {
    const color = document.getElementById('color').value;
    let result = document.getElementById('result');
    if (color === 'red') {
        result.innerHTML = `Must Stop.`;
        
    } else if (color === 'yellow') {
        result.innerHTML = `Ready To Move.`;
        
    } else if (color === 'green') {
        result.innerHTML = `Move Now.`;
        
    } else {
        result.innerHTML = `Choose the traffic Color`;
       
    }
}