import { Request, Response } from "express";

export const getYouTubeChannels = (req: Request, res: Response) => {
  try {
    // get youtube channels from youtube api
    const youtubeChannels: any = [
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
    ];
    return res.status(200).json(youtubeChannels);
  } catch (error: any) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
