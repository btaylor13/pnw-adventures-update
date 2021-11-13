$(document).ready(function () {
  $("#testimonial-slider").owlCarousel({
    items: 1,
    itemsDesktop: [1000, 1],
    itemsDesktopSmall: [979, 1],
    itemsTablet: [768, 1],
    pagination: false,
    navigation: true,
    navigationText: ["", ""],
    autoPlay: true,
  });
});

/*
// Initialize and add the map
function initMap() {
  // The location of Spokane
  //47.6588° N, 117.4260° W
  const spokane = { lat: 117.426, lng: 47.6588 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: spokane,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: spokane,
    map: map,
  });
}
*/
