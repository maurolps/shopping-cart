import { shoesData } from "../server";
import { Response, Request } from "express";

export default function shoesController() {
  const getAll = (_req: Request, res: Response) => {
    res.status(200).json(shoesData);
  };

  return { getAll };
}
