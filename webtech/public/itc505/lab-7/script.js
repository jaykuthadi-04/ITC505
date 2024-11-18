function generateMadLib() {
    const noun = document.getElementById("noun").value;
    const adjective = document.getElementById("adjective").value;
    const verb = document.getElementById("verb").value;
    const place = document.getElementById("place").value;
    const thing = document.getElementById("thing").value;


    const madLibText = `The ${adjective} ${noun} ${verb} through the forest.`;

    document.getElementById("result").textContent = madLibText;
}