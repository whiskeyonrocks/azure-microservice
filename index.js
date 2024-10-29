const express = require('express');

const app = express()
app.use(express.json());

app.post('/azure-event', (req, res) => {
    console.log("Request body is: ", req.body)

    const event = req.body;
    if(event.eventType === "Microsoft.EventGrid.SubscriptionValidationEvent"){
        const response = {
            validationResponse: event.data.validationCode
        }
        console.log("Reponding back with:", response);
        res.status(200).json(response)
    } else {
        console.log("Received event", event);
        res.status(200).send("Got it!");
    }
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log("Listening on port: ", PORT)
} )