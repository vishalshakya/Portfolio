/* ----------------------------------------- SKILL SECTION ---------------------------------------------------- */

function card(src, head, def) {
  let cards = `<div class="card"  >
            <img src="${src}" alt="" />
            <h3>${head}</h3>
            <p>${def}</p>
          </div>`;
  document.querySelector(".skills").innerHTML =
    document.querySelector(".skills").innerHTML + cards;
}
card("./image/html.png", "HTML", "Intermediate");
card("./image/css.png", "CSS", "Intermediate");
card("./image/js.png", "JavaScript", "Beginner");
card("./image/bootstrap.png", "Bootstrap", "Intermediate");
card("./image/web-design.png", "Web Designer", "Intermediate");
card("./image/microsoft.png", "MSOffice", "Beginner");
/* ----------------------------------------- PROJECT SECTION ---------------------------------------------------- */

function project(title, des, link) {
  let skills = `<div class="pro-list">
            <h3><img src="./image/leftarrow.svg" width="20px" alt="" /> ${title}</h3>
            <p class="des">
              ${des}
            </p>
            <button>
              <a href="${link}" target="_blank">Click Me</a>
            </button>
          </div>`;
  document.querySelector(".project").innerHTML =
    document.querySelector(".project").innerHTML + skills;
}
project(
  "Maurya Institute(Front-End)",
  "Developed a site using the HTML, CSS, BootStrap, and some internet sources for client.",
  "http://mivps.in/"
);
project(
  "Adhisha Faculty(Front-End)",
  "Developed a site using the HTML, CSS, BootStrap, and some internet sources for client.",
  "https://adfms.in/"
);
project(
  "IWeb development internship",
  "Making a Landing for internship Task by using HTML, CSS",
  "https://vishalshakya.github.io/landing_page/"
);
project(
  "Web development Internship (Mini Project)",
  "Making Portfolio for internship Project by using HTML, CSS, JavaScript",
  "https://vishalshakya.github.io/Portfolio//"
);
project(
  "Web development Internship (Major Project)",
  "Making Weather app for internship Project by using HTML, CSS, JavaScript",
  "https://vishalshakya.github.io/weather/"
);
