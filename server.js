import express from "express";
import cors from "cors";
import morgan from "morgan";
import createError from "http-errors";
import swaggerJsDoc from "swagger-jsdoc"
import swaggerUI from "swagger-ui-express"


// dotenv configuration
require("dotenv").config();

// database connection
import "./config/db";

const PORT = process.env.PORT 


// swagger options
const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "URL Hashing API",
			version: "1.0.0",
			description: "URL Hashing API",
		},
		servers: [
			{
				url: process.env.BASE_URL,
			},
		],
	},
	apis: ["./routes/*.js"],
};

const specs = swaggerJsDoc(options);


const app = express();

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

// middlewares
app.use(express.static(__dirname));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// routes
import urls from "./routes/urls";

app.use("/", urls);

app.use(async (req, res, next) => {
  next(createError.NotFound());
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      msg: err.message,
    },
  });
});

app.listen(PORT, () => console.log("Server is listening on port: ", PORT));
