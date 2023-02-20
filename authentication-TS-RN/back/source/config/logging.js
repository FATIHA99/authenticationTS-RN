"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const info = (namespace, message, object) => {
};
const warn = (namespace, message, object) => {
};
const error = (namespace, message, object) => {
};
const debug = (namespace, message, object) => {
};
const getTimeStamp = () => {
    return new Date().toISOString();
};
exports.default = {
    info,
    warn,
    error,
    debug
};
