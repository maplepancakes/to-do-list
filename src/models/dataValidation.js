const dataValidation = (function()
{
    const isEmptyString = function(value)
    {
        if (value === ``)
        {
            console.log(`Empty String: true`);

            return true;
        }
        else if (value !== ``)
        {
            console.log(`Empty string: false`);

            return false;
        }
    }

    return {isEmptyString};
})();

export default dataValidation;