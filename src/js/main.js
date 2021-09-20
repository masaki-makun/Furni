import { info } from "autoprefixer";
import "../css/style.css";

// Swiper
const mySwiper = new Swiper(".swiper-container", {
  direction: "horizontal",
  loop: false,
  speed: 1000,
  autoplay: {
    delay: 4000,
    disableOnInteraction: true,
  },
  stopOnLastSlide: false,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

// SearchButton
const search = () => {
  const searchForm = document.querySelector(".search-content");
  const searchInput = document.querySelector(".search-input");
  const searchBtn = document.querySelector(".search-btn");
  const navPc = document.querySelector(".js-nav__pc");
  const modal = document.querySelector(".js-modal");
  searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("run Search Click");
    if (!searchForm.classList.contains("focused")) {
      searchForm.classList.add("focused");
      navPc.classList.add("-translate-x-full");
      navPc.classList.add("opacity-0");
      navPc.classList.add("w-0");
      navPc.classList.add("scale-0");
      navPc.classList.remove("md:block");
      navPc.classList.remove("hidden");
      searchInput.focus();
      modalActive();
    } else {
      searchForm.classList.remove("focused");
      navPc.classList.add("md:block");
      searchInput.blur();
      modalNonActive();
    }
    modal.addEventListener("click", modalNonActive);
  });

  // modal表示処理
  const modalActive = () => {
    modal.classList.remove("w-0");
    modal.classList.remove("opacity-0");
    modal.classList.remove("hidden");
    modal.classList.add("w-full");
    modal.classList.add("bg-opacity-80");
    modal.classList.add("block");
    console.log("run modalActive");
  };

  // modal非表示処理
  const modalNonActive = () => {
    searchForm.classList.remove("focused");
    modal.classList.remove("w-full");
    modal.classList.remove("bg-opacity-80");
    modal.classList.remove("block");
    navPc.classList.remove("scale-0");
    navPc.classList.add("md:block");
    modal.classList.add("w-0");
    modal.classList.add("opacity-0");
    modal.classList.add("hidden");
    navPc.classList.remove("-translate-x-full");
    navPc.classList.remove("opacity-0");
    console.log("run modalNonActive");
  };

  window.addEventListener("click", () => {
    console.log("run windowClick");
  });
  console.log("run Search");
};

// navPanel表示処理
const navPanelActive = () => {
  const panel = document.querySelector(".js-nav__sp");
  const list = document.querySelector(".js-list--sp");
  const width = window.innerWidth;
  if (width < 500) {
    panel.classList.add("w-full");
  }
  panel.classList.remove("w-0");
  panel.classList.remove("opacity-0");
  panel.classList.remove("translate-x-full");
  list.classList.remove("w-0");
  list.classList.remove("opacity-0");
  list.classList.remove("translate-x-full");
  panel.classList.add("w-1/2");
  panel.classList.add("opacity-1");
  panel.classList.add("translate-x-0");
  list.classList.add("w-full");
  list.classList.add("opacity-1");
  list.classList.add("translate-x-0");
  console.log("run navPanelActive");
};

// navPanel非表示処理
const navPanelNonActive = () => {
  const panel = document.querySelector(".js-nav__sp");
  const list = document.querySelector(".js-list--sp");
  const width = window.innerWidth;
  if (width < 500) {
    panel.classList.remove("w-full");
  }
  panel.classList.remove("w-full");
  panel.classList.remove("opacity-1");
  panel.classList.remove("translate-x-0");
  list.classList.remove("w-1/2");
  list.classList.remove("opacity-1");
  list.classList.remove("translate-x-0");
  panel.classList.add("w-0");
  panel.classList.add("opacity-0");
  panel.classList.add("translate-x-full");
  list.classList.add("w-0");
  list.classList.add("opacity-0");
  list.classList.add("translate-x-full");
  console.log("run navPanelNonActive");
};

// overlay表示処理
const overlayActive = () => {
  const overlay = document.querySelector(".js-overlay");
  overlay.classList.remove("opacity-0");
  overlay.classList.remove("translate-x-full");
  overlay.classList.remove("w-0");
  overlay.classList.add("opacity-90");
  overlay.classList.add("translate-x-0");
  overlay.classList.add("w-full");
  console.log("run overlayActive");
};

// overlay非表示処理
const overlayNonActive = () => {
  const overlay = document.querySelector(".js-overlay");
  overlay.classList.remove("opacity-90");
  overlay.classList.remove("translate-x-0");
  overlay.classList.remove("w-full");
  overlay.classList.add("opacity-0");
  overlay.classList.add("translate-x-full");
  overlay.classList.add("w-0");
  console.log("run overlayNonActive");
};

// menuBtn表示処理
const menuBtnActive = () => {
  const menuBtn = document.querySelector(".js-menu-btn");
  menuBtn.classList.remove("hidden");
  menuBtn.classList.add("block");
  console.log("run menuBtnActive");
};

// menuBtn非表示処理
const menuBtnNonActive = () => {
  const menuBtn = document.querySelector(".js-menu-btn");
  menuBtn.classList.add("hidden");
  menuBtn.classList.remove("block");
  console.log("run menuBtnNonActive");
};

// closeBtn表示処理
const closeBtnActive = () => {
  const closeBtn = document.querySelector(".js-close-btn");
  closeBtn.classList.remove("hidden");
  closeBtn.classList.add("block");
  console.log("run closeBtnActive");
};

// closeBtn表示処理
const closeBtnNonActive = () => {
  const closeBtn = document.querySelector(".js-close-btn");
  closeBtn.classList.add("hidden");
  closeBtn.classList.remove("block");
  console.log("run closeBtnNonActive");
};

// navLinkクリックでoverlay, panel非表示処理
const clickFunc = () => {
  const list = document.querySelector(".js-list--sp");
  const links = document.querySelectorAll(".js-list-link--sp");
  const overlay = document.querySelector(".js-overlay");
  const panel = document.querySelector(".js-nav__sp");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      menuBtnActive();
      closeBtnNonActive();
      overlay.classList.remove("opacity-90");
      overlay.classList.remove("translate-x-0");
      overlay.classList.remove("w-full");
      overlay.classList.add("opacity-0");
      overlay.classList.add("translate-x-full");
      overlay.classList.add("w-0");
      panel.classList.remove("w-full");
      panel.classList.remove("opacity-1");
      panel.classList.remove("translate-x-0");
      list.classList.remove("w-full");
      list.classList.remove("opacity-1");
      list.classList.remove("translate-x-0");
      panel.classList.add("w-0");
      panel.classList.add("opacity-0");
      panel.classList.add("translate-x-full");
      list.classList.add("w-0");
      list.classList.add("opacity-0");
      list.classList.add("translate-x-full");
    });
  });
  console.log("run clickFunc");
};

// tab切り替え処理
const tabToggle = () => {
  const tabItems = document.getElementsByClassName(" js-tab-list-item");
  for (let i = 0; i < tabItems.length; i++) {
    tabItems[i].addEventListener("click", tabToggle2);
  }
  function tabToggle2() {
    document
      .getElementsByClassName("is-active")[0]
      .classList.remove("is-active");
    this.classList.add("is-active");
    document.getElementsByClassName("is-show")[0].classList.remove("is-show");
    const arrTabs = Array.prototype.slice.call(tabItems);
    const index = arrTabs.indexOf(this);
    document
      .getElementsByClassName("tab-content")
      [index].classList.add("is-show");
  }
  console.log("run tabToggle");
};

// スクロール処理
function ScrollWindow() {
  const tabs = document.querySelectorAll("js-tab-list-item--link");
  tabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
      e.preventDefault();
      const href = tab.getAttribute("href");
      const target = document.getElementById(href);
      const rect = target.getBoundingClientRect();
      const elemTop = rect.top + window.pageYOffset;
      window.scrollTo(0, elemTop);
      console.log("getTarget");
    });
  });
  console.log("run scrollWindow");
}

// 総合処理
const totalFunc = () => {
  const menuBtn = document.querySelector(".js-menu-btn");
  const closeBtn = document.querySelector(".js-close-btn");
  const overlay = document.querySelector(".js-overlay");
  menuBtn.addEventListener("click", (e) => {
    e.preventDefault();
    navPanelActive();
    overlayActive();
    menuBtnNonActive();
    closeBtnActive();
  });
  closeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    navPanelNonActive();
    overlayNonActive();
    closeBtnNonActive();
    menuBtnActive();
  });
  overlay.addEventListener("click", () => {
    navPanelNonActive();
    overlayNonActive();
    closeBtnNonActive();
    menuBtnActive();
  });
  console.log("run totalFunc");
};

document.addEventListener(
  "DOMContentLoaded",
  ScrollWindow(),
  clickFunc(),
  tabToggle(),
  totalFunc(),
  search()
);
