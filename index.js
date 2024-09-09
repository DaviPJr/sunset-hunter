import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import moment from 'moment';


const app = express();
const port = 3000;
const url = "https://api.open-meteo.com/v1/forecast";
const params = {
	"latitude": -23.5475,
	"longitude": -46.6361,
	"hourly": "temperature_2m",
	"daily": "sunset",
	"timezone": "America/Sao_Paulo"
};

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
  });

app.get("/", async (req, res) => {
  let sunset = "Não disponível";
    try {
      const response = await axios.get(url, {params});
      console.log(response.data);
      const sunsetTime = response.data.daily.sunset[0];
      sunset = moment(sunsetTime).format('HH:mm')
    } catch (error) {
        console.error("Erro ao buscar o horário do pôr do sol: ", error.message)
    }
    res.render("index.ejs", {sunset})
 });


