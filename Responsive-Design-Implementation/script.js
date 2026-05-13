function toggleMenu() {
  const nav = document.getElementById("nav");
  nav.style.display = nav.style.display === "block" ? "none" : "block";
}

const enrollBtn = document.querySelector(".primary-btn");

const modal = document.createElement("div");
modal.style.position = "fixed";
modal.style.inset = "0";
modal.style.background = "rgba(0,0,0,0.4)";
modal.style.display = "none";
modal.style.alignItems = "center";
modal.style.justifyContent = "center";
modal.style.zIndex = "1000";

modal.innerHTML = `
  <div style="
    background: white;
    padding: 30px;
    border-radius: 10px;
    text-align: center;
    width: 90%;
    max-width: 360px;
  ">
    <h3 style="margin-bottom: 12px;">Enrollment Successful</h3>
    <p style="margin-bottom: 20px;">
      You have been enrolled in the WebSkills program.
    </p>
    <button id="closeModal" style="
      padding: 10px 20px;
      background: #4f46e5;
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
    ">
      Close
    </button>
  </div>
`;

document.body.appendChild(modal);

enrollBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

document.addEventListener("click", (e) => {
  if (e.target.id === "closeModal" || e.target === modal) {
    modal.style.display = "none";
  }
});
