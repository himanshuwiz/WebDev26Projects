document.addEventListener('DOMContentLoaded', function() {
    var pass = document.getElementById("password");
    var msg = document.getElementById("message");

    pass.addEventListener('input', function() {
        var strength = '';
        var color = '';

        if (pass.value.length === 0) {
            msg.style.display = "none";
        } else {
            msg.style.display = "block";

            if (pass.value.length < 4) {
                strength = "Weak";
                color = "#ff0000"; // Red
            } else if (pass.value.length >= 4 && pass.value.length < 8) {
                strength = "Medium";
                color = "#ffa500"; // Orange
            } else if (pass.value.length >= 8) {
                strength = "Strong";
                color = "#008000"; // Green
            }

            msg.innerHTML = "Password is " + strength;
            pass.style.borderColor = color;
            msg.style.color = color;
        }
    });
});


