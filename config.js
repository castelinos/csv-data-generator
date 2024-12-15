import dotenv from "dotenv";

const config = dotenv.config({ path: '.env'});

if( config.error ) {
    console.error('Error defining project config :', config.error.message);
    process.exit(1);
}

export default {
    server:{
        port: process.env.PORT || 9000
    },
    url: process.env.URL || `http://localhost:${process.env.PORT}`,
}