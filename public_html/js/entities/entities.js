// TODO
game.PlayerEntity = me.Entity.extend({
   init: function(x, y, settings){
       settings.image = "mario";
       settings.spritewidth = "128";
       settings.spriteheight = "128";
       settings.width = 128;
       settings.height = 128;
       this_super(me.Entity, 'init', [x, y, settings]);
   },
   
   update: function(){
       
   } 
    
});