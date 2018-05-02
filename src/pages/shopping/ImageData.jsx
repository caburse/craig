const ImageData = {
  products: [
    {
      id: "Girls",
      images: [
        { id: 1, type: "shirt", url: "http://via.placeholder.com/200x200?text=Girl1" },
        { id: 2, type: "shoes", url: "http://via.placeholder.com/200x200?text=Girl2" },
        { id: 3, type: "pants", url: "http://via.placeholder.com/200x200?text=Girl3" },
        { id: 4, type: "shirt", url: "http://via.placeholder.com/200x200?text=Girl4" },
        { id: 5, type: "shirt", url: "http://via.placeholder.com/200x200?text=Girl5" },
        { id: 6, type: "shirt", url: "http://via.placeholder.com/200x200?text=Girl6" }
      ]
    }, {
      id: "Boys",
      images: [
        { id: 1, type: "shirt", url: "http://via.placeholder.com/200x200?text=Boy1" },
        { id: 2, type: "shirt", url: "http://via.placeholder.com/200x200?text=Boy2" },
        { id: 3, type: "shirt", url: "http://via.placeholder.com/200x200?text=Boy3" },
        { id: 4, type: "shoes", url: "http://via.placeholder.com/200x200?text=Boy4" },
        { id: 5, type: "pants", url: "http://via.placeholder.com/200x200?text=Boy5" },
        { id: 6, type: "shoes", url: "http://via.placeholder.com/200x200?text=Boy6" },
        { id: 7, type: "shoes", url: "http://via.placeholder.com/200x200?text=Boy7" }
      ]
    }, {
      id: "Women",
      images: [
        { id: 1, type: "shirt", url: "http://via.placeholder.com/200x200?text=Women1" },
        { id: 2, type: "shirt", url: "http://via.placeholder.com/200x200?text=Women2" },
        { id: 3, type: "shirt", url: "http://via.placeholder.com/200x200?text=Women3" },
        { id: 4, type: "shoes", url: "http://via.placeholder.com/200x200?text=Women4" },
        { id: 5, type: "pants", url: "http://via.placeholder.com/200x200?text=Women5" },
        { id: 6, type: "pants", url: "http://via.placeholder.com/200x200?text=Women6" }
      ]
    }, {
      id: "Men",
      images: [
        { id: 1, type: "pants", url: "http://via.placeholder.com/200x200?text=Men1" },
        { id: 2, type: "shirt", url: "http://via.placeholder.com/200x200?text=Men2" },
        { id: 3, type: "shirt", url: "http://via.placeholder.com/200x200?text=Men3" },
        { id: 4, type: "shirt", url: "http://via.placeholder.com/200x200?text=Men4" },
        { id: 5, type: "shoes", url: "http://via.placeholder.com/200x200?text=Men5" },
      ]
    }
  ],
  get: function() { return this.products },
  filter: function( id, type ) {
    const isChosen = i => (i.id === id);
    let result = this.products.find( isChosen );
    if(!result){
      return [];
    }
    return !type? result.images : result.images.filter((image) => image.type === type);
  }
}
export default ImageData;