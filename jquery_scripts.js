
// Written by Sarah Reiser.
//This is my jquery script for use with my fake web site

//This part is to change the background color of the
//navigation button when it is clicked  This keeps the
//siblings darkblue, while the selected one is blue.
("ul.choicelist li").on("click", function(){
  (this).siblings().css("background-color", "darkblue");
  (this).css("background-color", "blue"),
})
("img#imgb1").hide();

function surfto(form)
{
  var myindex = form.destination.selectedIndex;
  if (form.destination.options[myindex].value != "")
  {
    window.location.href=form.destination.options[myindex].value;
  }
}
("button#b1").on("click", function() {
  ("img#imgb1").show();
});
("button#b2").on("click", function() {
  ("img#imgb1").slideUp();
});
