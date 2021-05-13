$(document).ready(function(){
    var classCycle=['img1','img2','img3','img4','img5','img6','img7','img7','img8','img9','img10','img11','img12','img13'];

    var randomNumber = Math.floor(Math.random() * classCycle.length);
    var classToAdd = classCycle[randomNumber];
    
    $('body').addClass(classToAdd);

});