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
    ];
    return res.status(200).json(youtubeChannels);
  } catch (error: any) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
