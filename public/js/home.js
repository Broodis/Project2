$(function() {
    console.log('on file load');
    $("#searchSubmit").on("click", function(event) {

        console.log('clicked');
    // $.ajax("/api/users/search", {
    //     type: "POST",
    //     data: { phone:"555-555-5555"},
    // }).then(function(response) {
    //         if(response) {
    //             // window.touch.href="/socials/"
    //             window.location = "/socials/";
    //         }
    //         else {
    //             window.location = "/404/";
    //         }
    //     })
    })
});


