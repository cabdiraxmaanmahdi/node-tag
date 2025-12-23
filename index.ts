import express from "express";
import { getPLTeams } from "./api/pl";

const app = express();

app.listen(9000, () => {
  console.log("Server is running on port 3000");
});

app.get("/", (req, res) => {
  res.send("Hello World on port 9000");
});

app.get("/pl-teams", getPLTeams);

app.get("/youtube", (req, res) => {
  res.json({
    message: "youtube is the best",
    channel: [
      {
        name: "HAJI ALI MEDIA",
        channelHandle: "@hajialimedia",
        subscribers: "2.69k",
      },
      {
        name: "bein sports",
        channelHandle: "@beinsports",
        subscribers: "15.6m",
      },
      {
        name: "GitHub",
        channelHandle: "@github",
        subscribers: "567k",
      },
      {
        name: "Abdijaliil Show",
        channelHandle: "@Abdijaliil",
        subscribers: "420k",
      },
      {
        name: "Macruuf tech",
        channelHandle: "@Macruuftech",
        subscribers: "576",
      },
      {
        name: "Maxamed Qadar",
        channelHandle: "@MaxamadqadarMk",
        subscribers: "2.12m",
      },
      {
        name: "OrcDev",
        channelHandle: "@OrcDev",
        subscribers: "22.6k",
      },
      {
        name: "Zakariye Cabdi",
        channelHandle: "@ZakariyeCabdi",
        subscribers: "240k",
      },
    ],
  });
});
