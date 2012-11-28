#Description
Persist plugin for jQuery. Element collection follows user down the page on scroll before it goes out of view.

#Usage:
Options are optional. If omitted, defaults are used (listed further below).

    <script src="$.persist.js"></script>
    $(element_collection).persist(options);

#Options (and defaults):

    {
      'scrollCheckInterval': 100,
      'className': 'persist',            
      'namespace': 'persist_' + Math.floor(Math.random()*1E8),
      'css': {
        'position': 'fixed',
        'top': '8px'
      }
    }
    
##scrollCheckInterval:
Minimum in milliseconds between window scroll checks (to check the position of each element vs. scroll position). Increase this time for less JavaScript processing.
If set to 0, the check will be performed on every window scroll event fired.

##className:
The class name to be added to each element in the collection. 
className + "-wrap" will be added to the wrapping code of each element in the collection (added via the plugin).
className + "-active" will be added to each element in the collection that is actively "following" the window scroll.

##namespace:
Namespace for the $(window).on('scroll') event.

##css:
Custom CSS to be applied to each element in the collection when it is "active".