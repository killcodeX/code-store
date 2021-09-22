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

// Delete Controllers
export const getdeletePost = async (req: any, res: any) => {
  const { id } = req.params;
  if (id == req.userId) {
    res.status(404).json({ message: "Not Authorized" });
  }
  try {
    //await PostMessage.findByIdAndDelete(id);
    res.status(200).json({ result: "Post Removed Successfully !!!" });
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

// filter by language
export const getFilterLang = async (req: any, res: any) => {
  const { language } = req.body;
  try {
    const result = await PostMessage.find({
      userId: req.userId,
      language: language,
    });
    res.status(200).json(result);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};
