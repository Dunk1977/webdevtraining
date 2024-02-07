import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

function getAdvice(dayOfWeek) {
    if (dayOfWeek >= 1 && dayOfWeek <=5){
        return "Its a weekday stay productive";

    }
    else {
        return "Its weekend ENJOY!!";
    }

}

app.get("/", (req, res) => {
    const dayOfWeek = new Date().getDay();
    const advice = getAdvice(dayOfWeek);
    res.render(__dirname + "\\views\\index.ejs", { advice });

  });


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });