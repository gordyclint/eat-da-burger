$("#add-burger").on("click", function() {
   var newBurgers = {
       burger_name: $("#burger_name").val().trim()
   }

    $.ajax({
        url: "/api/burgers",
        method: "POST",
        data: newBurgers
    }).then(function() {
        location.reload();
    })
});

$(".update-burger").on("click", function() {
    var newBurgers = {
        devoured: true
    }
    var id = $(this).attr("data-id");

    $.ajax({
        url: "/api/burgers/" + id,
        method: "PUT",
        data: newBurgers
    }).then(function() {
        location.reload();
    })
});

$("#delete-burger").on("click", function() {
    var id = $(this).attr("data-id");
    alert("This burger has been deleted");
    $.ajax({
        url: "/api/burgers/" + id,
        method: "DELETE"
    }).then(function() {
        location.reload();
    })
})