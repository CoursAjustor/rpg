import * as mongoose from 'mongoose';
import { config } from '../config/Config';

export const dbInit = async () => {
  const mongoOptions = {
    useNewUrlParser: true
  };
  
  const mongoPath = `mongodb+srv://${config.get('dbUser')}:${config.get('dbPassword')}@${config.get('dbUrl')}/${config.get('dbName')}`;
  
  console.log(mongoPath)
  await mongoose.connect(mongoPath, mongoOptions);

  const db = mongoose.connection;

  db.on("error", function (err) {
    console.error.bind(console, "connection error:", err);
  });
  db.once("open", function () {
    console.log("Database connected !");
  });

}