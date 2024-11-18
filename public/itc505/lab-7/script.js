const { noun, verb, adjective, place, animal } = req.body;

    if (!noun || !verb || !adjective || !place || !animal) {
        res.send(`
            <h1>Submission Failed</h1>
            <p>Please fill out ALL fields.</p>
            <a href="/ITC505/lab-7">Go Back to Form</a>
        `);
        return;
    }

    const madLib = `Once upon a time in ${place}, there was a ${adjective} ${animal} who loved to ${verb} with a ${noun}.`;
    res.send(`
        <h1>Mad Lib Completed</h1>
        <p>${madLib}</p>
        <a href="/ITC505/lab-7">Create Another Mad Lib</a>
    `);
