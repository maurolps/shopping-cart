import { shoesData } from "../server";
import { Response } from "express";

export default function shoesController() {
  const getAll = (_req, res: Response) => {
    res.status(200).json(shoesData);
  };

  return { getAll };
}
