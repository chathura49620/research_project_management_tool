const Document = require("../model/document.model");

exports.create = async (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "No file uploaded" });
  }
  const file = req.files.file;

  file.mv(
    `${__dirname}/../../../research_project_management_tool_fe/public/uploads/${file.name}`,
    (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      }
      res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
    }
  );
};

exports.AddDocuments = async (req, res) => {
  const documentName = req.body.documentName;

  try {
    const newDocument = new Document({ documentName });

    await newDocument.save();

    res.json({ status: "ok" });
  } catch (err) {
    res.json({ status: "error" });
  }
};

exports.getAllDocuments = async (req, res) => {
  try {
    const documents = await Document.find();

    res.json(documents);
  } catch (err) {
    res.json({
      status: "error",
      error: "Error happened",
    });
  }
};
