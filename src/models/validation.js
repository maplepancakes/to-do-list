const validation = (function()
{
    const validateIsEmptyString = function(value)
    {
        if (value === ``)
        {
            return true;
        }
        else if (value !== ``)
        {
            return false;
        }
    }

    return {validateIsEmptyString};
})();

export default validation;