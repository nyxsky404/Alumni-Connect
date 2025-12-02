import express from "express";
import Clubs from "../models/Clubs.model.js";

const router = express.Router();

// Get all clubs
router.get("/", async (req, res) => {
    try {
        const clubs = await Clubs.find();
        res.json(clubs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get specific club by ID
router.get("/:id", async (req, res) => {
    try {
        const club = await Clubs.findById(req.params.id);
        if (!club) {
            return res.status(404).json({ message: "Club not found" });
        }
        res.json(club);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a new club (POST /api/clubs)
router.post("/", async (req, res) => {
    try {
        // Adjust fields according to your Clubs.schema
        const club = new Clubs({
            name: req.body.name,
            description: req.body.description,
            image: req.body.image,
            // add any other fields here...
        });

        const savedClub = await club.save();
        res.status(201).json(savedClub);
    } catch (err) {
        res.status(400).json({ message: err.message }); // validation errors etc.
    }
});

// Update an existing club (PUT /api/clubs/:id)
router.put("/:id", async (req, res) => {
    try {
        const updatedClub = await Clubs.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body, // or list specific fields you allow to update
            },
            {
                new: true,          // return the updated document
                runValidators: true // run schema validators on update
            }
        );

        if (!updatedClub) {
            return res.status(404).json({ message: "Club not found" });
        }

        res.json(updatedClub);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete a club (DELETE /api/clubs/:id)
router.delete("/:id", async (req, res) => {
    try {
        const deletedClub = await Clubs.findByIdAndDelete(req.params.id);

        if (!deletedClub) {
            return res.status(404).json({ message: "Club not found" });
        }

        res.json({ message: "Club deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export default router;
