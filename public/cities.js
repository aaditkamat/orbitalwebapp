$( function() {
    var availableTags = ["Singapore", "Naypyidaw", "Ho Chi Minh", "Kuala Lumpur", "Phnom Penh", "Bangkok", "Vientiane", "Manila", "Jakarta", "Bandar Seri Begawan"];
    $( "input[name=city]" ).autocomplete({
      source: availableTags
    });
  });