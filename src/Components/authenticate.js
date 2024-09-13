const express = require("express");
const collection = require("./mongo");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
    res.send("API is working");
});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const check = await collection.findOne({ email: email });

        if (check) {
            res.json("exist");
        } else {
            res.json("notexist");
        }
    } catch (e) {
        console.error("Error during login check:", e);
        res.status(500).json({ message: "Server error during login check" });
    }
});

app.post("/signup", async (req, res) => {
    const { email, password } = req.body;

    const data = { email: email, password: password };

    try {
        const check = await collection.findOne({ email: email });

        if (check) {
            res.json("exist");
        } else {
            await collection.insertMany([data]);
            res.json("notexist");
        }
    } catch (e) {
        console.error("Error during signup:", e);
        res.status(500).json({ message: "Server error during signup" });
    }
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
