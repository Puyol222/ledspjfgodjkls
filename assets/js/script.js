function checkCode() {
  const correctCode = "030966";
  const input = document.getElementById("codeInput").value;
  if (input === correctCode) {
    window.location.href = "surprise.html";
  } else {
    alert("รหัสผิดจ้า ลองใหม่นะ 💌");
  }
}
