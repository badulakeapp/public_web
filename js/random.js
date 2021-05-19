$(document).ready(function(){
    var classCycle=['bg__1','bg__2','bg__3','bg__4','bg__5'];
    var randomNumber = Math.floor(Math.random() * classCycle.length);
    var classToAdd = classCycle[randomNumber];
    
    $('body').addClass(classToAdd);
    
});