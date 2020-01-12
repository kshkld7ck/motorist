$(document).ready(() => {
  $(".scrollTo").click(function() {
    var elementClick = $(this).attr("href");
    console.log(elementClick);
    var destination = $(elementClick).offset().top - 90;
    $("html,body").animate(
      {
        scrollTop: destination
      },
      1000
    );
    return false;
  });
  $("#accept").click(function() {
    var name = $("#name").val();

    var tonn = $("#tonn").val();
    var size = $("#size").val();
    var from = $("#from").val();
    var to = $("#to").val();
    var mail = $("#mail").val();
    var phone = $("#phone").val();

    if (
      name.length > 0 &&
      tonn.length > 0 &&
      size.length > 0 &&
      from.length > 0 &&
      to.length > 0 &&
      phone.length > 0
    ) {
      var formData = {
        name: "Имя: " + $("#name").val() + "<br>",
        gruz: "Груз: " + $("#gruz").val() + "<br>",
        tonn: "Тонн: " + $("#tonn").val() + "<br>",
        size: "Объем: " + $("#size").val() + "<br>",
        from: "Откуда: " + $("#from").val() + "<br>",
        to: "Куда: " + $("#to").val() + "<br>",
        mail: "Электронный адрес: " + $("#mail").val() + "<br>",
        phone: "Телефон: " + $("#phone").val() + "<br>",
        message: "Сообщение: " + $("#textarea").val() + "<br>"
      }; //собераем все данные из формы
      $.ajax({
        type: "POST", //Метод отправки
        url: "./mail.php", //путь до php фаила отправителя
        data: formData,
        success: function() {
          $("form input, form textarea").val("");
          $(".close").click();
          //код в этом блоке выполняется при успешной отправке сообщения
        }
      });
    } else {
      console.log("beda");
      $(".required").each(function() {
        if ($(this).val().length === 0) {
          $(this).css("border", "1px solid red");
        } else {
          $(this).css("border", "1px solid rgba(33,33,33,.80)");
        }
      });
    }
  });
});
