// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {users} from "./data/users"

export default function handler(req, res) {
  if(req.method === "GET"){
    res.status(200).json(users);
  }else if(req.method === "POST"){
    const user = JSON.parse(req.body);
    const newUser = {
      id:Date.now(),
      name:user.name
    }
    users.data.push(newUser);
    res.status(200).json(users)
  }
}
