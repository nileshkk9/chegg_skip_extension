function clickmeOld() {
  $("#skipQuestion").click(function() {
    $(".radio-label")
      .eq("3")
      .trigger("click");
    // $(".reason-label")
    //   .eq("20")
    //   .trigger("click");

    $(".btn-primary")
      .eq("0")
      .trigger("click");
  });
}

clickmeOld();
