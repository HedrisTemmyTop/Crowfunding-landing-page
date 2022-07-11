const closeModalBtn = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");
const selectBox = document.querySelectorAll(".modal__overlay--box-2");

const openPlans = document.querySelectorAll(".monitor__button--cyan");

const modalContent = document.querySelector(".modal__overlay--content");
const menuIcon = document.querySelector(".menu__icon");
const menu = document.querySelector(".menu");

menuIcon.addEventListener("click", function () {
  // menuIcon.classList.remove()
  console.log("h");
  menuIcon.classList.toggle("rotate");
  menu.classList.toggle("show-menu");
});

closeModalBtn.addEventListener("click", function () {
  modal.classList.remove("open-modal");
  //   modal.classList.add("remove-modal");
});

modalContent.addEventListener("click", function (e) {
  const id = e.target.closest(".modal__overlay--box-2");

  if (id.classList.contains("modal__overlay--box-2"))
    selectBox.forEach((box) => {
      box.classList.remove("addBorder");
      if (box.querySelector(".input")) {
        // console.log(`Hello`);
        // box.querySelector(".input").innerHTML = ``;
      }
    });
  id.classList.add("addBorder");

  if (!id.classList.contains("modal__overlay--box-2")) return;
});

openPlans.forEach((btn) =>
  btn.addEventListener("click", function () {
    modal.classList.add("open-modal");
  })
);

// const html = `<div class="input">

// </div>
// `;
