const config = {
    port: process.env.PORT || 3000,
    databaseUrl: process.env.MONGODB_URI || 'mongodb://test:test12@ds121182.mlab.com:21182/tailab8'
};

export default config;