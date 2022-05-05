import createError from "http-errors";
import shortid from "shortid";
import validUrl from "valid-url"

import HashedUrl from "../model/HashedUrl";


// create short url
export const createShortUrl = async (req, res, next)=> {
    try{
        const {fullUrl} = req.body
        if(!validUrl.isUri(fullUrl)) throw createError.BadRequest("Url is invalid!")

        const hash = shortid.generate(fullUrl)

        const shortUrl = process.env.BASE_URL+"/"+hash

        const hashedUrl = new HashedUrl({
            fullUrl,
            shortUrl,
            hash
        })

        const savedUrl = await hashedUrl.save()
        return res.status(200).json(savedUrl)
    }catch(err){
        next(err)
    }
}

// naviagate to the original url
export const navigate = async (req, res, next)=> {
    try{
        const hashedUrl = await HashedUrl.findOne({"hash": req.params.hash})

        if(!hashedUrl) throw createError.NotFound("Invalid Url");

        if(hashedUrl.clicks>=3) throw createError.BadRequest("URL limit exceeded")

        const response = await HashedUrl.findByIdAndUpdate(hashedUrl.id, {$set: {clicks: hashedUrl.clicks+1}}, {new: true})
        res.redirect(hashedUrl.fullUrl)

    }catch(err){
        next(err)
    }
}