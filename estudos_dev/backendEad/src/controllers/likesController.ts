// src/controllers/likesController.ts

import { Request, Response } from "express";
import { AuthenticatedRequest } from "../middleware/auth";
import { likeService } from "../services/likeService";

export const likesController = {
  // POST /likes
  save: async (req: AuthenticatedRequest, res: Response) => {
    const userId = req.user!.id;
    const { courseId } = req.body;
    const erro = "Ops! Você já realizou essa ação!";

    try {
      const like = await likeService.create(userId, courseId);
      return res.status(201).json(like);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: erro });
      }
    }
  },
  // DELETE /likes/:id
  delete: async (req: AuthenticatedRequest, res: Response) => {
    const userId = req.user!.id;
    const courseId = req.params.id;

    try {
      await likeService.delete(userId, Number(courseId));
      return res.status(204).send();
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },
};
