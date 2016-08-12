$(document).ready(function() {
  var drupal = parseInt(0)
  var android = parseInt(0)
  $("#answers").submit(function() {
    if ($("#design option:selected").text() === "yes") {
      drupal += 1;
    } else android += 1;
    if ($("#data option:selected").text() === "yes") {
      drupal += 1;
    } else android += 1;

    if ($("input[name=companyType]:checked").val() === "large" || $("input[name=companyType]:checked").val() === "start-up") {
      android += 1;
    } else drupal += 1;
    if ($("input[name=workType]:checked").val() === "phone" || $("input[name=workType]:checked").val() === "business") {
      android += 1;
    } else drupal += 1;
    if ($("input[name=backgroundLanguages]:checked").val() === "C#" || $("input[name=backgroundLanguages]:checked").val() === "VB") {
      android += 1;
    } else drupal += 1;
    var fName = $("#fname").val();
    var lName = $("#lname").val();
    $(".firstName").text(fName);
    $(".lastName").text(lName);
    if (drupal > android) {
      var result = "PHP / Drupal"
    } else {
      var result = "Java / Android"
    }
    $(".suggestion").text(result)
  event.preventDefault();
  });
});
