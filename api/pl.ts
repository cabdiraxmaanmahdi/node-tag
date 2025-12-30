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

export const plMatches = (req: Request, res: Response) => {
  try {
    const matches: any = {
      message: "Premier League Matches",
      matches: {
        "WeekMatch 19": {
          "Tue 30 Dec 2025": [
            {
              HomeTeam: "Bumley",
              AwayTeam: "Newcastle United",
              Time: "22:30",
              Stadium: "Turf Moor",
            },
            {
              HomeTeam: "Chelsea",
              AwayTeam: "Bornemouth",
              Time: "22:30",
              Stadium: "Stamford Bridge",
            },
            {
              HomeTeam: "West Ham United",
              AwayTeam: "Brighton & Hove Albion",
              Time: "22:30",
              Stadium: "London Stadium",
            },
            {
              HomeTeam: "Arsenal",
              AwayTeam: "Aston Villa",
              Time: "23:15",
              Stadium: "Emirates Stadium",
            },
            {
              HomeTeam: "Manchester United",
              AwayTeam: "Wolverhampton Wanderers",
              Time: "23:15",
              Stadium: "Old Trafford",
            },
          ],
        },
      },
    };
  } catch (error: any) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const plStandings = (req: Request, res: Response) => {
  try {
    const standings: any = {
      message: "Premier League Standings",
      standings: [
        { position: "1", team: "Manchester City", points: "38" },
        { position: "2", team: "Manchester United", points: "37" },
        { position: "3", team: "Liverpool", points: "34" },
        { position: "4", team: "Chelsea", points: "31" },
        { position: "5", team: "Arsenal", points: "30" },
      ],
    };
    return res.status(200).json(standings);
  } catch (error: any) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
