// check off specific todos by clicking
// add a listener to the entire ul parent so that any new
// children will have that event listener added 
// when an li is clicked inside a ul
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
    console.log("li clicked")
});

$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
    if (event.which === 13) {
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash-o'></i></span> " + todoText + "</li>")
    }
});

$(".fa-plus-square-o").click(function() {
    $("input[type='text']").fadeToggle();
})