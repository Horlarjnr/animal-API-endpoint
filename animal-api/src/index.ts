import express from "express";

const app = express();
const PORT = 4000;

const animalDatabase = {
  cat: {
    animal: "cat",
    scientific_name: "Felis catus",
    lifespan_years: "12–18",
    diet: "carnivore",
    average_weight_kg: "4–5",
    common_colors: ["black", "white", "gray", "orange", "tabby"],
    fun_fact: "Cats can rotate their ears 180 degrees.",
  },
  dog: {
    animal: "dog",
    scientific_name: "Canis lupus familiaris",
    lifespan_years: "10–13",
    diet: "omnivore",
    average_weight_kg: "10–30",
    common_colors: ["brown", "black", "white", "golden", "spotted"],
    fun_fact:
      "A dog's sense of smell is 10,000 to 100,000 times more sensitive than a human's.",
  },
  elephant: {
    animal: "elephant",
    scientific_name: "Loxodonta africana",
    lifespan_years: "60–70",
    diet: "herbivore",
    average_weight_kg: "4000–6000",
    common_colors: ["gray"],
    fun_fact:
      "Elephants can communicate using low-frequency sound vibrations felt through their feet.",
  },
};

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
