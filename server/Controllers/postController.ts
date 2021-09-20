import PostMessage from "../Models/PostModel";

export const createPost = async (req: any, res: any) => {
  let data = {
    ...req.body,
    userId: req.userId,
  };
  try {
      const result = await PostMessage.create(data);
      res.status(200).json(result);
    } catch (error: any) {
      res.status(404).json({ message: error.message });
    }
};

export const getAllPost = async (req: any, res: any) => {
  try {
    const result = await PostMessage.find({ userId: req.userId });
    res.status(200).json(result);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};
