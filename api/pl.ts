import { Request, Response } from "express";

// get premier league teams
export const getPLTeams = (req: Request, res: Response) => {
  try {
    const plTeams: any = [
      { name: "Arsenal", stadium: "Emirates Stadium" },
      { name: "Chelsea", stadium: "Stamford Bridge" },
      { name: "Liverpool", stadium: "Anfield" },
      { name: "Manchester City", stadium: "Etihad Stadium" },
      { name: "Manchester United", stadium: "Old Trafford" },
      { name: "Tottenham Hotspur", stadium: "Tottenham Hotspur Stadium" },
      { name: "West Ham United", stadium: "London Stadium" },
    ];
    return res.status(200).json(plTeams);
  } catch (error: any) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
