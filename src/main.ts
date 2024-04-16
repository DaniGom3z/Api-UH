import express from "express";
import { Signale } from "signale";
import { userRouter } from "./user/infrastructure/UserRouter";
import { enclosureRouter } from "./enclosure/infraestructure/EnclosureRouter";

const app = express();

app.disable("x-powered-by");

const options = {
  secrets: ["([0-9]{4}-?)+"]
};

const logger = new Signale(options); 

app.use(express.json());
app.use("/users", userRouter);
app.use("/enclosure", enclosureRouter);

app.listen(process.env.PORT, () => {
  logger.success("Server online in port 4000");
});