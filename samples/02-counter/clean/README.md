Clean Code Example
==================

app-1
-----

This is the first version. It has some crude error handling added. The
version in final/ has no error handling.

Test with index-1-ok.html and index-1-err.html

app-2
-----

app-1 has been refactored to make the if stmts cleaner. Also try/catch
error handling has been added.

Test with index-2-ok.html and index-2-err.html

app-3
-----

The button names set in variables. This avoids hardcoded literals in
multiple places. Of course one could have typos in the variable names.

Test with index-3-ok.html and index-3-err.html

Manual Testing
--------------

Notice the number of files needed to do the manual testing for each of
the permutations of app.js.

Using TDD with a version control tool, to save each new version of app.js,
you would probably only need 3 files. app.js, app-test.js, and index-test.html

This app would be coded so that it would be easier to test. A function
would be created to inc, dec, and reset the counter. Setting up the
initial page would probably be function. Then displaying the counter
changes would be another function.

The behavior tests:

- Is the counter object setup OK? (check the HTML)

- Is the counter incremented if inc button clicked?

- Is the counter decremented if dec button clicked?

- Is the counter set to 0 if reset button clicked?

- Is the counter change output correct? =0 - black, <0 - red, >0 - green

- Are internal defects reported?
