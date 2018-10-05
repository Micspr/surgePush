const buttonInitiated = document.querySelector('#testButton')
buttonInitiated.addEventListener('click', (event) => {
    event.preventDefault()
    alert(`Now you clickie da button!`)
})

window.addEventListener("click", function() {
    alert("You clicked on the page!");
});