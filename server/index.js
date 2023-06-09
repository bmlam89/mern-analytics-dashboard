import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import kpiRoutes from './routes/kpiRoutes.js';
import productRoutes from './routes/productRoutes.js';
import transactionRoutes from "./routes/transactionRoutes.js";
import KPI from "./models/kpiModel.js";
import Product from "./models/productModel.js";
import Transaction from "./models/transactionModel.js";
import { kpis, products, transactions } from "./data/data.js";

/* CONFIGURATIONS */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* ROUTES */
app.use("/kpi", kpiRoutes);
app.use("/products", productRoutes);
app.use("/transactions", transactionRoutes);

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 9000;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(async () => {
    app.listen(PORT, () => console.log(`Server Port ${PORT}`));

    /* ADDING DUMMY DATA, ONE MODEL AT A TIME */
    //await mongoose.connection.db.dropDatabase();
    //KPI.insertMany(kpis);
    //Product.insertMany(products);
    //Transaction.insertMany(transactions);
  })
  .catch((error) => console.log(`${error} did not connect`));