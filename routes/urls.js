import { Router } from "express";
import { createShortUrl, navigate } from "../controller/URLController";


const router = Router()


// create short url
router.post("/create-short-url", createShortUrl)

// navigate to the original url
router.get("/:hash", navigate)



export default router
