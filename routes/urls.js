import { Router } from "express";
import { createShortUrl, navigate } from "../controller/URLController";

const router = Router();



/**
 * @swagger
 * components:
 *   schemas:
 *     HashedUrl:
 *       type: object
 *       required:
 *         - fullUrl
 *         - shortUrl
 *         - clicks
 *         - hash
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the hashed url
 *         fullUrl:
 *           type: string
 *           description: The original url
 *         shortUrl:
 *           type: string
 *           description: The hashed Url
 *         hash:
 *           type: string,
 *           description: The hash value for a url
 *         clicks:
 *           type: number,
 *           description: Number of clicks on the url
 *       example:
 *         id: d5fE_aszmncefhnce
 *         fullUrl: https://www.google.com/
 *         shortUrl: http://localhost:3241/dhyfg7e
 *         hash: dhyfg7e
 *         clicks: 3
 */

/**
 * @swagger
 * tags:
 *   name: HashedUrl
 *   description: The Url shortener API
 */

/**
 * @swagger
 * /create-short-url:
 *   post:
 *     summary: Create a new short url
 *     tags: [HashedUrl]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/HashedUrl'
 *     responses:
 *       201:
 *         description: The short url was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/HashedUrl'
 *       500:
 *         description: Internal server error
 */

// create short url
router.post("/create-short-url", createShortUrl);



/**
 * @swagger
 * /{hash}:
 *   get:
 *     summary: Redirect to the original url with short url
 *     tags: [HashedUrl]
 *     parameters:
 *       - in: path
 *         name: hash
 *         schema:
 *           type: string
 *         required: true
 *         description: The short url hash value
 *     responses:
 *       200:
 *         description: Redirect to the original url
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/HashedUrl'
 *       404:
 *         description: The Url was not found
 *       400:
 *          description: The url is invalid
 */

// navigate to the original url
router.get("/:hash", navigate);

export default router;
