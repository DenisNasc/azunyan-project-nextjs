import mongoose from 'mongoose';

const config = {useNewUrlParser: true, useUnifiedTopology: true};

// eslint-disable-next-line consistent-return
const initializeMongo = async (database: string): Promise<mongoose.Connection> => {
  try {
    const connection = await mongoose.createConnection(
      `mongodb://localhost:27017/${database}`,
      config
    );

    return connection;
  } catch (error) {
    console.log(error.message);
  }
};

export default initializeMongo;
