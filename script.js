// update copyright year
document.getElementById("year").innerHTML = new Date().getFullYear();


// allow page navigation with arrow keys
var pages = ["/", "/projects.html", "/about.html", "/contact.html"];

document.addEventListener("keydown", (e) => {

    if (e.key == "ArrowLeft") {
        // alert(window.location.pathname);
        var index = pages.indexOf(window.location.pathname);

        if (index == 0) {
            window.location.href = pages[pages.length - 1]
        }
        else {
            window.location.href = pages[index - 1]
        }
        
    }
    else if (e.key == "ArrowRight") {
        // alert(window.location.pathname);
        var index = pages.indexOf(window.location.pathname);

        window.location.href = pages[(index + 1) % pages.length]
        
    }
  });