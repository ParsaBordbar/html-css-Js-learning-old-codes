function randomBackgroundColorGen (){
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let backgroundColor = "rgb("+x + ',' + y +',' +z +")"
    console.log(backgroundColor);
    document.body.style.background = backgroundColor;
}


document.addEventListener('keydown', (event) => {
    event.preventDefault();

    if (event.key.toLowerCase() === 'd' && event.ctrlKey) {
        randomBackgroundColorGen ()
    }
});