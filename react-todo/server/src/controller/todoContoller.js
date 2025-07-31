import todoModel from "../model/todoSchema.js";

export const addTodo = async (req, res) => {
  try {
    const { title, description, date, priority } = req.body;
    const todo = await todoModel.create({ title, description, date, priority });

    return res.status(201).json({
      success: true,
      message: "Todo successfully created",
      todo:[todo],
    });
  } catch (error) {
    console.error("Add Todo Error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to create todo",
    });
  }
};

export const getTodo = async (_req, res) => {
  try {
    const todo = await todoModel.find().sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      message: "Todos fetched successfully",
      todo:todo,
    });
  } catch (error) {
    console.error("Fetch Todos Error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch todos",
    });
  }
};

export const updateTodo = async (req, res) => {
  try {
    const { _id, ...updates } = req.body;

    if (!_id) {
      return res.status(400).json({
        success: false,
        message: "Todo ID is required for update",
      });
    }

    const todo = await todoModel.findByIdAndUpdate(_id, { $set: updates }, { new: true });

    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "Todo not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Todo updated successfully",
      todo,
    });
  } catch (error) {
    console.error("Update Todo Error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to update todo",
    });
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Todo ID is required for deletion",
      });
    }

    const todo = await todoModel.findByIdAndDelete(id);

    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "Todo not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Todo deleted successfully",
      todo,
    });
  } catch (error) {
    console.error("Delete Todo Error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to delete todo",
    });
  }
};
