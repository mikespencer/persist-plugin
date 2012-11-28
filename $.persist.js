/**
  * @fileoverview persist plugin for jQuery. Element collection follows user
  *     down the page on scroll before it goes out of view.
  * @Author michael.spencer@washingtonpost.com (Mike Spencer)
  */
(function($){

  'use strict';
  
  if(!$){ return false; }

  $.fn.persist = function(){

    var elements = [], 
      doScrollCheck = true, 
      options = $.extend(true, {
        'scrollCheckInterval': 100,
        'className': 'persist',            
        'namespace': 'persist_' + Math.floor(Math.random()*1E8),
        'css': {
          'position': 'fixed',
          'top': '8px'
        }
      }, (arguments[0] || {})),
      clearCSS = (function(){
        var rv = {}, key;
        for(key in options.css){
          if(options.css.hasOwnProperty(key)){
            rv[key] = '';
          }
        }
        return rv;
      })(),
      activeClass = options.className + '-active',
      wrapClass = options.className + '-wrap';

    function scrollCheck(e){
      if(doScrollCheck){
        $(elements).each(function(i,el){
          var $el = $(el), 
            topCheck = $el.closest('div.' + wrapClass).offset().top - parseInt(options.css.top, 10);
          if(topCheck <= $(window).scrollTop()){
            if(!$el.hasClass(activeClass)){
              $el.addClass(activeClass).css(options.css);
            }
          } else if($el.hasClass(activeClass)) {
            $el.removeClass(activeClass).css(clearCSS);
          }
        });
        
        if(options.scrollCheckInterval){
          doScrollCheck = false;
          setTimeout(function(){
            doScrollCheck = true;
          }, options.scrollCheckInterval);
        }

      }
    }
    
    $(window).on('scroll.' + options.namespace, scrollCheck);
  
    return this.each(function(){
      $(this).addClass(options.className).wrap('<div class="' + wrapClass + '"></div>');
      elements.push(this);
    });
  };
  
})(window.jQuery);