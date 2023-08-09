import { sendMail } from "@/helpers/mailService"; 
const handler = async ({req, res}:any) => {
  try {
    const { method } = req;
    switch (method) {
      case "POST": {
        //Do some thing
        await sendMail(
          "TEST",
          "dontkillme@bunnyfiedlabs.com",
          "THI IS A TEST FOR MY MEDIUM USERS",
        );
        res.status(200).send("Success");
        break;
      }
      case "GET": {
        //Do some thing
        res.status(200).send(req.auth_data);
        break;
      }
      default:
        res.setHeader("Allow", ["POST", "GET", "PUT", "DELETE"]);
        res.status(405).end(`Method ${method} Not Allowed`);
        break;
    }
  } catch (err:any) {
    res.status(400).json({
      error_code: "api_one",
      message: err.message,
    });
  }
};

export default handler;