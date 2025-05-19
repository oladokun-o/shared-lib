import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/AppError";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof AppError) {
    return res
      .status(err.statusCode)
      .json({ success: false, message: err.message });
  }

  console.error(err);
  return res
    .status(500)
    .json({ success: false, message: "Internal Server Error" });
};

// For unhandled routes
export const notFoundHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const err = new AppError(`Can't find ${req.originalUrl} on this server`, 404);
  next(err);
};