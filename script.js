document.addEventListener('DOMContentLoaded', function() {
    // Retrieve saved data from localStorage
    var savedDestination = localStorage.getItem('destination');
    var savedArrival = localStorage.getItem('arrival');

    // Display saved data on the webpage
    if (savedDestination && savedArrival) {
        document.getElementById('savedInfo').innerHTML = "Destination: " + savedDestination + "<br> Arrival: " + savedArrival;
    }
});

document.getElementById('arrivalForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    var destination = document.getElementById('destination').value;
    var arrival = document.getElementById('arrival').value;

    // Save form data
    localStorage.setItem('destination', destination);
    localStorage.setItem('arrival', arrival);

    // Display saved data on the webpage
    document.getElementById('savedInfo').innerHTML = "Destination: " + destination + "<br> Arrival: " + arrival;

    // Clear form inputs
    document.getElementById('destination').value = '';
    document.getElementById('arrival').value = '';

    // Optionally, you can display a success message or redirect the user
    alert('Form submitted successfully!');
});

function showPage(pageId) {
    // Hide all pages
    var pages = document.getElementsByClassName('page');
    for (var i = 0; i < pages.length; i++) {
        pages[i].style.display = 'none';
    }

    // Show the selected page
    document.getElementById(pageId).style.display = 'block';
}