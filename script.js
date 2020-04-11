var inputs = document.querySelectorAll("#q1_radios input");
var inputs2 = document.querySelectorAll("#q2_radios input");
var skip = document.querySelector("#skip");
var submit = document.querySelector("#submit");

var q1_value = 0;
var q2_value = 0;
var q2_ht = {
  image: false,
  name: false,
  description: false,
};

inputs.forEach(function (input) {
  input.addEventListener("click", function (event) {
    q1_value = Number(event.target.value);

    var q2_radios = document.querySelector("#q2_radios");

    if (event.target.value === "100") {
      q2_radios.style.display = "block";
    } else {
      q2_radios.style.display = "none";
      q2_value = 0;
    }
  });
});

inputs2.forEach(function (input) {
  input.addEventListener("click", function (event) {
    if (!q2_ht[event.target.id]) {
      q2_value += Number(event.target.value);
      q2_ht[event.target.id] = true;
    } else {
      q2_value -= Number(event.target.value);
      q2_ht[event.target.id] = false;
      event.target.checked = false;
    }
  });
});

function sendToServer(sum) {
  // Call provided SendToServer backend service
}

skip.addEventListener("click", function () {
  location.reload();
});

submit.addEventListener("click", function () {
  if (q1_value === 0) {
    alert("Please answer first question");
    return;
  } else if (q2_value === 0 && q1_value === 100) {
    alert("Please answer second question");
    return;
  }
  var sum = q1_value + q2_value;

  if (sum > 0 && sum <= 225) {
    sendToServer(sum);
    alert("Thank you for answering");
  }
});
