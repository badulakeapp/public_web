$(document).ready(function(){
    var classCycle=['bgA','bgB','bgC','bgD','bgE','bgF','bgG'];
    var randomNumber = Math.floor(Math.random() * classCycle.length);
    var classToAdd = classCycle[randomNumber];
    
    $('body').addClass(classToAdd);
    
});