import express from 'express';
import photoControler from './controler';

const photoRouter = new express.Router();

photoRouter.get("/", photoControler.get);
photoRouter.post("/", photoControler.post);


export default photoRouter;