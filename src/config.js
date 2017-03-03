const env = process.env;
export const nodeEnv = env.NODE_ENV ||'developement';

export const logStars = (message)=>{
console.info('*********');
console.info(message);
console.info('*********');
};

export default {
    mongodbUri: 'mongodb://localhost:27017/test',
    port : env.PORT || 8000,
    host: env.HOST || '192.168.56.1',
    get serverUrl(){
        return `http://${this.host}:${this.port}`;
    }
}