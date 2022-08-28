// Better error handling with try/catch and stack dump

// set inital value to zero
let count = 0;
// select value and buttons
const value = document.querySelector("#value");
const btnList = document.querySelectorAll(".btn");

btnList.forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    try {
      const styles = event.currentTarget.classList;
      if (styles.contains("decrease"))
        count--;
      else if (styles.contains("increase"))
        count++;
      else if (styles.contains("XXXXreset"))
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
