// bài 1
(document.getElementById("btnSalary").onclick = function () {
  var e =
    document.getElementById("inputNum1").value *
    document.getElementById("inputNum2").value;
  document.getElementById("txtSalary").innerHTML = e;
}),
  // bài2
  (document.getElementById("btnTB").onclick = function () {
    let e =
      Number(document.getElementById("num1").value) +
      Number(document.getElementById("num2").value) +
      Number(document.getElementById("num3").value) +
      Number(document.getElementById("num4").value) +
      Number(document.getElementById("num5").value);

    document.getElementById("txtTB").innerHTML = Number(e / 5);
  }),
  //   bài 3
  (document.getElementById("btnCurrency").onclick = function () {
    var e = document.getElementById("usd").value,
      t = new Intl.NumberFormat("vn-VN").format(25455 * e);
    document.getElementById("txtCurrency").innerHTML = t;
  }),
  //   bài 4
  (document.getElementById("btnCal").onclick = function () {
    var e = document.getElementById("width").value,
      t = document.getElementById("height").value,
      n = e * t,
      u = 2 * (Number(e) + Number(t));
    document.getElementById(
      "txtCal"
    ).innerHTML = `Diện tích: ${n} - Chu vi: ${u}`;
  }),
  //   bài 5
  (document.getElementById("btnSum").onclick = function () {
    var e = document.getElementById("number").value,
      t = Math.floor(e / 10),
      n = e % 10;
    document.getElementById("txtSum").innerHTML = t + n;
  });
