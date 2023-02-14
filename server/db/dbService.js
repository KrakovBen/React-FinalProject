const connectDB = (ENVIROMENT)=>{
    if(ENVIROMENT === 'development') require('./mongoDB/connectToLocal');
    // if(ENVIROMENT === 'development') require('./mongoDB/connectToAtlasDev');
    if(ENVIROMENT === 'production') require('./mongoDB/connectToAtlas');
}

module.exports = connectDB;