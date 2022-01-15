const { join, resolve } = require("path");
const { readFileSync } = require("fs");

export default async (req, res) => {
  const templateDirectory = resolve(process.cwd(), "data");
  const emailTemplate = readFileSync(
    join(templateDirectory, "users.json"),
    "utf8"
  );
  return res.status(200).json(emailTemplate);
};
