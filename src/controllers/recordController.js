const Record = require("../models/Record");



exports.create = async (req, res) => {
  try {
    const { amount, type, category, date } = req.body;

 
    if (!amount || !type || !category || !date) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    const record = await Record.create({
      ...req.body,
     
    });

    res.status(201).json(record);

  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};




exports.getAll = async (req, res) => {
  try {
    const {
      type,
      category,
      startDate,
      endDate,
      page = 1,
      limit = 5
    } = req.query;

    let filter = {};

   
    if (type) filter.type = type;
    if (category) filter.category = category;

    if (startDate || endDate) {
      filter.date = {};
      if (startDate) filter.date.$gte = new Date(startDate);
      if (endDate) filter.date.$lte = new Date(endDate);
    }

   
    const skip = (Number(page) - 1) * Number(limit);

    const records = await Record.find(filter)
      .sort({ date: -1 })       
      .skip(skip)
      .limit(Number(limit));

   
    const total = await Record.countDocuments(filter);

    res.json({
      total,
      page: Number(page),
      pages: Math.ceil(total / limit),
      records
    });

  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};




exports.summary = async (req, res) => {
  try {
    const data = await Record.find();

    let income = 0;
    let expense = 0;

    data.forEach((r) => {
      if (r.type === "income") income += r.amount;
      else expense += r.amount;
    });

    res.json({
      income,
      expense,
      balance: income - expense
    });

  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};


exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    if (req.user.role !== "admin") {
        return res.status(403).json({ msg: "Access denied" });
        }

    const updated = await Record.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ msg: "Record not found" });
    }

    res.json(updated);

  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};


exports.remove = async (req, res) => {
  try {
    const { id } = req.params;

    if (req.user.role !== "admin") {
        return res.status(403).json({ msg: "Access denied" });
        }

    const deleted = await Record.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ msg: "Record not found" });
    }

    res.json({ msg: "Record deleted successfully" });

  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};


exports.getOne = async (req, res) => {
  try {
    const { id } = req.params;

    const record = await Record.findById(id);

    if (!record) {
      return res.status(404).json({ msg: "Record not found" });
    }

    res.json(record);

  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.categorySummary = async (req, res) => {
  try {
    const data = await Record.aggregate([
      {
        $group: {
          _id: "$category",
          total: { $sum: "$amount" }
        }
      }
    ]);

    res.json(data);

  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};