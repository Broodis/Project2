$(function() {
    console.log('on file load');
    $("#searchSubmit").on("click", function(event) {

        console.log('clicked');
        
    $.ajax("/api/users/search", {
        type: "POST",
        data: { phone: $("#searchInput").val() },
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


