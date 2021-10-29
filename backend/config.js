import { process_params } from "express/lib/router";

export default {
    MONGODB_URL: process.env.MONGODB_URL || 'mongodb:??localhost/Ecom',
    JWT_SECRET: process.env.JWT_SECRET || 'somethingsecret'
}