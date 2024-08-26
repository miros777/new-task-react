import Joi from "joi";
const wordValidator = Joi.object({
    searchword: Joi.string().pattern(/^(?![\d+_@.-]+$)[a-zA-Z0-9+_@.-]*$/).min(2).max(20).required().messages({
        "string.pattern.base": "Only letter or numbers",
        "string.min": "Min 2 letters",
        "string.max": "Max 20 letters",
    })
})

export {
    wordValidator
}
