document.getElementById("madLibForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission and page reload

    // Get the values from the form inputs
    const noun = document.getElementById("noun").value;
    const verb = document.getElementById("verb").value;
    const adjective = document.getElementById("adjective").value;
    const place = document.getElementById("place").value;
    const animal = document.getElementById("animal").value;

    // Validate the form inputs
    if (!noun || !verb || !adjective || !place || !animal) {
        document.getElementById("madLibResult").innerHTML = `
            <h1>Submission Failed</h1>
            <p>Please fill out ALL fields.</p>
        `;
        return;
    }

    // Generate the Mad Lib story
    const madLib = `Once upon a time in ${place}, there was a ${adjective} ${animal} who loved to ${verb} with a ${noun}.`;

    // Display the result
    document.getElementById("madLibResult").innerHTML = `
        <h1>Mad Lib Completed</h1>
        <p>${madLib}</p>
        <a href="#" onclick="resetForm()">Create Another Mad Lib</a>
    `;
});

// Function to reset the form and result
function resetForm() {
    document.getElementById("madLibForm").reset();
    document.getElementById("madLibResult").innerHTML = "";
}
