document.addEventListener("DOMContentLoaded", function() {
  const h3 = document.getElementById("url");
  const input1 = document.getElementById("name");
  const input2 = document.getElementById("year");
  const btn = document.getElementById("button");

  btn.addEventListener("click", function() {
    const queryString = `?name=${encodeURIComponent(input1.value)}&year=${encodeURIComponent(input2.value)}`;
    h3.innerText = `https://localhost:8080/${queryString}`;
  });
});

