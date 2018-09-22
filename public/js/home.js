$(function() {
    console.log('on file load');
    $("#searchSubmit").on("click", function(event) {

        console.log('clicked');
        
    $.ajax("/api/search/" + $("#searchInput").val(), {
        type: "POST",
    }).then(function(response) {
            if(response) {
                // window.touch.href="/socials/"
                window.location = "/socials/" + response.id;
            }
            else {
                window.location = "/404/";
            }
        })
    })
});

$(function() {
    console.log('on file load');
    $("#dashSearchSubmit").on("click", function(event) {

        console.log('clicked');
        
    $.ajax("/api/search/" + $("#dashSearchInput").val(), {
        type: "POST",
    }).then(function(response) {
            if(response) {
                // window.touch.href="/socials/"
                window.location = "/socials/" + response.id;
            }
            else {
                window.location = "/404/";
            }
        })
    })
});


