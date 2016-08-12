$(document).ready(function() {
  var drupal = parseInt(0)
  var android = parseInt(0)
  var net = parseInt(0)
  var rails = parseInt(0)
  $("#answers").submit(function() {
    var startDate = new Date($("#classDate").val());
    var startDate = parseInt(startDate.getMonth())+2;
    var design = $("#design option:selected").text();
    if (startDate === 8 && design === "Yes") {
        drupal += 1;
    } else if (startDate === 8 && design === "No") {
      android +=1;
    } else if (startDate === 11 && design === "Yes") {
      rails += 1;
    } else net += 1;
    var data = $("#data option:selected").text();
    if (startDate === 8 && data === "Yes") {
      drupal += 1;
    } else if (startDate === 8 && data === "No") {
      android += 1;
    } else if (startDate === 11 && data === "Yes") {
      net += 1;
    } else rails += 1;
    var company = $("input[name=companyType]:checked").val();
    if (startDate === 8 && company === "large" || company === "start-up") {
      android += 1;
    } else if (startDate === 8 && company === "small") {
      drupal += 1;
    } else if (startDate === 11 && company === "small" && company === "start-up"){
      rails += 1;
    } else net += 1;
    var work = $("input[name=workType]:checked").val()
    if (startDate === 8 && work === "phone" || work === "business") {
      android += 1;
    } else if (startDate === 8 && work === "websites") {
      drupal += 1;
    } else if (startDate === 11 && work === "phone" || work === "business") {
      net += 1;
    } else rails += 1;
    var background = $("input[name=backgroundLanguages]:checked").val();
    if (startDate === 8 && background === "C#" || background === "VB") {
      android += 1;
    } else if (startDate === 8 && background === "html") {
      drupal +=1;
    } else if (startDate === 11 && background === "C#" || background === "VB") {
      net += 1;
    } else rails += 1;
    var fName = $("#fname").val();
    var lName = $("#lname").val();
    $(".firstName").text(fName);
    $(".lastName").text(lName);
    if (startDate === 8 && drupal > android) {
      var result = "PHP / Drupal"
    } else if (startDate === 8 && drupal < android) {
      var result = "Java / Android"
    } else if (startDate === 11 && net > rails) {
      var result = "C# / .Net"
    } else var result = "Ruby / Rails";
    $(".suggestion").text(result);
    $("#result").fadeIn();
    $("#funProgramming").show();
    event.preventDefault();
  });
  $('form').on('reset', function(event) {
    $("#result").fadeOut();
    $("#funProgramming").fadeOut();
    var drupal = parseInt(0)
    var android = parseInt(0)
    var net = parseInt(0)
    var rails = parseInt(0)
  });
});
