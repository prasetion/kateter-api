const { join, resolve } = require("path");
const { readFileSync, writeFileSync } = require("fs");

export default async (req, res) => {
  if (req.method === "POST") {
    var user = JSON.parse(req.body);

    const newUser = {
      id: Date.now(),
      name: user.name,
    };

    console.log("POST :" + newUser);

    const templateDirectory = resolve(process.cwd(), "data");
    const users = readFileSync(join(templateDirectory, "users.json"), "utf8");
    var usersData = JSON.parse(users);
    usersData.users.push(newUser);

    const replaceUsers = writeFileSync(
      join(templateDirectory, "users.json"),
      JSON.stringify(usersData)
    );

    console.log(usersData);

    return res.status(200).json({
      message: "success",
    });
  } else if (req.method === "GET") {
    const templateDirectory = resolve(process.cwd(), "data");
    const users = readFileSync(join(templateDirectory, "users.json"), "utf8");
    return res.status(200).json(users);
  }
};
