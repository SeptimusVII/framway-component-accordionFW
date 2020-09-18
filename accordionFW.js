module.exports = function(app){
    var AccordionFW = Object.getPrototypeOf(app).AccordionFW = new app.Component("accordionFW");
    //AccordionFW.debug = true;
    AccordionFW.createdAt      = "2.0.0";
    AccordionFW.lastUpdate     = "2.0.0";
    AccordionFW.version        = "1";
    // AccordionFW.factoryExclude = true;
    // AccordionFW.loadingMsg     = "This message will display in the console when component will be loaded.";
    // AccordionFW.requires       = [];

    // AccordionFW.prototype.onCreate = function(){
    // do thing after element's creation
    // }
    return AccordionFW;
}