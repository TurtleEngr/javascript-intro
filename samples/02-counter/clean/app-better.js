// Manage button names

let count = 0;

const btnInc = "increase";
const btnDec = "decrease";
const btnZero = "reset";
const defBtn = document.getElementById("buttons");
defBtn.innerHTML = `
  <button class="btn ${btnDec}">${btnDec}</button>
  <button class="btn ${btnZero}">${btnZero}</button>
  <button class="btn ${btnInc}">${btnInc}</button>
`;

const value = document.querySelector("#value");
const btnList = document.querySelectorAll(".btn");

btnList.forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    try {
      const styles = event.currentTarget.classList;
      if (styles.contains(btnDec))
        count--;
      else if (styles.contains(btnInc))
        count++;
      else if (styles.contains(btnZero))
        count = 0;
      else
        throw new Error("Unknown button name");

      if (count > 0)
        value.style.color = "green";
      else if (count < 0)
        value.style.color = "red";
      else if (count === 0)
        value.style.color = "#222";
      else
        throw new Error("count is not a number");
    }
    catch (err) {
      alert(err.stack);
    }
    value.textContent = count;
  });
});
