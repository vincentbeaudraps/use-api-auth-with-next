import express from "express";
import handler from "./pages/api/hello";

app.prepare().then(() => {

    const server = express();
    server.use(express.json());
    server.post('/api/login' , (req, res) => {

        const {email , password } = req.body;
        res.json({
            email,
            password,
            success: true
        })

    })

    server.get("*", (req, res) => {
        return handle(req,res);

    });
    server.listen(port,err => {
      if (err) throw (err); {
          console.log(`listening on PORT ${port}`);
        }
    });
    });