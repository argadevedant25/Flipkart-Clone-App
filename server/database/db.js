import mongoose from 'mongoose';

const Connection = async (username, password) => {
        //const URL = `mongodb+srv://${username}:${password}@cluster0.jjowu.mongodb.net/flipkart?retryWrites=true&w=majority`;
        //const url = `mongodb+srv://argadevedant25:Tnadev25@@ecommerce-web.xq1i4w1.mongodb.net/`;
        //mongodb+srv://argadevedant25:<db_password>@ecommerce-web.xq1i4w1.mongodb.net/?appName=ecommerce-web
        //const url = `mongodb+srv://argadevedant25:<db_password>@ecommerce-web.xq1i4w1.mongodb.net/?appName=ecommerce-web`;
        const url = `mongodb://argadevedant25:Tnadev25@@ac-zap3pwf-shard-00-00.xq1i4w1.mongodb.net:27017,ac-zap3pwf-shard-00-01.xq1i4w1.mongodb.net:27017,ac-zap3pwf-shard-00-02.xq1i4w1.mongodb.net:27017/?ssl=true&replicaSet=atlas-b71245-shard-0&authSource=admin&appName=ecommerce-web`;
    try {
        await mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;