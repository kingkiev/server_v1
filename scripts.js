advise_url = "https://sf-pyw.mosyag.in/m04/api/forecasts"

$("#main-header-1").click(function() {

	$.getJSON(advise_url, function(data) {
			set_content_in_divs(data['prophecies'])
	
	});		
});

function set_content_in_divs(paragraphs) {
  $.each(paragraphs, function(i, d) {
    p = $("#p-" + i)
    p.html("<p>" + d + "</p>")
  })
}

