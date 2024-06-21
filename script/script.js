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
  "Front-End Web developed",
  "Developed a site using the HTML,CSS,BootStrap and some internet sources for client.",
  "http://mivps.in/"
);
project(
  "Front-End Web Developed",
  "Developed a site using the HTML,CSS,BootStrap and some internet sources for client.",
  "https://adfms.in/"
);
project(
  "Internship Task",
  "Making a Landing for intership Task by using HTML,CSS",
  "https://vishalshakya.github.io/landing_page/"
);
project(
  "Internship Mini Project",
  "Making Portfolio for intership Project by using HTML,CSS,JavaScript",
  "https://vishalshakya.github.io/Portfolio_vishal/"
);
project(
  "Internship Major Project",
  "Making Weather app for intership Project by using HTML,CSS,JavaScript",
  "https://vishalshakya.github.io/weather/"
);
