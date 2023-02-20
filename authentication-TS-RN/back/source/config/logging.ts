


const info = (namespace: string, message: string, object?: any) => {

};

const warn = (namespace: string, message: string, object?: any) => {
   
};

const error = (namespace: string, message: string, object?: any) => {
 
};

const debug = (namespace: string, message: string, object?: any) => {
 
};

const getTimeStamp = (): string => {
    return new Date().toISOString();
};



export default {
    info,
    warn,
    error,
    debug
};
