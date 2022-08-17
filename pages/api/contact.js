import { client } from "../../lib/client";
import uuid62 from "uuid62";
export default function handler(req, res) {
  const { name, email, message } = req.body;
  const uuid = uuid62.v4();
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required Fields" });
  }
  if (req.method === "POST") {
    return addForm();
  }else{
    res.status(404).send("Not found");
  }
  async function addForm() {
    try {
      const space = await client.getSpace(process.env.CONTENTFUL_SPACE_ID);
      const env = await space.getEnvironment("nextjs");
      const entry = await env.createEntryWithId("form",uuid, {
        fields: {
          name: {
            "en-US": name,
          },
          email: {
            "en-US": email,
          },
          message: {
            "en-US": message,
          },
        },
      });
      return res.json({ sucess: true, entry: { name, email, message } });
    } catch (e) {
      return res
        .status(500)
        .json({ error: e, message: "Server Error, Please try again." });
    }
  }
}
