(function($_){
  var loader = new $_.page_loader({
    per_page: 2,
    url: "/products/story.json"
  });
  $(document).on('click','.more_load', function(e){
    e.preventDefault();
    loader.group_load.call(loader);
  });
}).call(this, window);
