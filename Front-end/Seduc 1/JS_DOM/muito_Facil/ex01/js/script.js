const myDiv = document.querySelector('#minhaDiv');

myDiv.addEventListener('mouseover', function() {
    myDiv.style.backgroundColor = "green";
});

myDiv.addEventListener('mouseout', function() {
    myDiv.style.backgroundColor = "red";
});