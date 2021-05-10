const objectStorage = (function()
{
    let projectObject = {};

    const consoleLogStorage = function()
    {
        console.log(projectObject);
    };

    return {projectObject, consoleLogStorage};
})();

export default objectStorage;
