/* Shared interactions for the NIS website */
document.addEventListener("DOMContentLoaded", () => {
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
    || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  if (isIOS) document.documentElement.classList.add("ios-liquid-glass");
  const interactionStyles = document.createElement("style");
  interactionStyles.textContent = `
    header { position: sticky; top: 0; z-index: 100; transition: box-shadow .25s ease, background-color .25s ease; }
    .menu-icon { border: 0; background: transparent; font-family: inherit; }
    header.is-scrolled { box-shadow: 0 8px 24px rgba(15, 35, 58, .24); }
    body { background: #f8fafc; color: #26384c; }
    main { min-height: 530px; }
    .hero { position: relative; overflow: hidden; background: linear-gradient(135deg, #173353 0%, #1e3a5f 55%, #2d6698 100%); }
    .hero::before, .hero::after { position: absolute; border-radius: 50%; content: ""; pointer-events: none; background: rgba(255,255,255,.06); }
    .hero::before { width: 230px; height: 230px; top: -130px; left: 8%; }
    .hero::after { width: 300px; height: 300px; right: -150px; bottom: -190px; }
    .hero::before { animation: banner-float-one 8s ease-in-out infinite; }
    .hero::after { animation: banner-float-two 10s ease-in-out infinite; }
    @keyframes banner-float-one { 0%, 100% { transform: translate3d(0, 0, 0); } 50% { transform: translate3d(18px, 20px, 0); } }
    @keyframes banner-float-two { 0%, 100% { transform: translate3d(0, 0, 0); } 50% { transform: translate3d(-22px, -18px, 0); } }
    .hero h1, .hero p { position: relative; z-index: 1; }
    .description > h1 { color: #173353; }
    .description > p { line-height: 1.65; }
    .btn-abt, .btn-cnt { cursor: pointer; box-shadow: 0 7px 16px rgba(30, 58, 95, .18); transition: transform .2s ease, box-shadow .2s ease, background-color .2s ease; }
    .btn-abt:hover, .btn-cnt:hover { transform: translateY(-3px); box-shadow: 0 11px 20px rgba(30, 58, 95, .25); }
    .btn-cnt { background-color: #2563a8; }
    .event-card, .program-card, .value-card, .v-card-row, .card { border-color: #d7e2ed; box-shadow: 0 4px 14px rgba(24, 53, 83, .06); }
    .event-card, .program-card { overflow: hidden; }
    .event-card img, .program-card img { display: block; height: 190px; object-fit: cover; transition: transform .35s ease; }
    .event-card:hover img, .program-card:hover img { transform: scale(1.04); }
    .events > h2, .programs > h2, section > h2, .state > h2 { color: #173353; letter-spacing: -.02em; }
    .footer { margin-top: 24px; }
    /* Applied only when JavaScript detects iPhone or iPad. */
    .ios-liquid-glass, .ios-liquid-glass body { background: radial-gradient(circle at 10% 4%, #e0f1ff 0, transparent 28%), radial-gradient(circle at 92% 18%, #e9e4ff 0, transparent 25%), #eef5fb; }
    .ios-liquid-glass header, .ios-liquid-glass .menu { background: rgba(21, 53, 85, .72); -webkit-backdrop-filter: blur(20px) saturate(160%); backdrop-filter: blur(20px) saturate(160%); border-bottom: 1px solid rgba(255,255,255,.2); }
    .ios-liquid-glass .hero { margin: 18px 24px 0; border: 1px solid rgba(255,255,255,.38); border-radius: 26px; background: linear-gradient(135deg, rgba(23,51,83,.8), rgba(47,111,161,.63)); box-shadow: 0 18px 42px rgba(29,70,109,.18), inset 0 1px 0 rgba(255,255,255,.23); -webkit-backdrop-filter: blur(18px) saturate(135%); backdrop-filter: blur(18px) saturate(135%); }
    .ios-liquid-glass .event-card, .ios-liquid-glass .program-card, .ios-liquid-glass .value-card, .ios-liquid-glass .v-card-row, .ios-liquid-glass .card, .ios-liquid-glass .school-highlight { border: 1px solid rgba(255,255,255,.72); background: rgba(255,255,255,.55); box-shadow: 0 12px 30px rgba(29,70,109,.12), inset 0 1px 0 rgba(255,255,255,.7); -webkit-backdrop-filter: blur(18px) saturate(145%); backdrop-filter: blur(18px) saturate(145%); }
    .ios-liquid-glass .school-highlight { color: #163858; background: rgba(224,242,255,.58); }
    .ios-liquid-glass .school-highlight h2, .ios-liquid-glass .school-highlight__item strong { color: #153b61; }
    .ios-liquid-glass .school-highlight > p:last-child, .ios-liquid-glass .school-highlight__item > span { color: #315775; }
    .ios-liquid-glass .school-highlight__item { background: rgba(255,255,255,.42); border: 1px solid rgba(255,255,255,.62); }
    .ios-liquid-glass .event-card, .ios-liquid-glass .program-card, .ios-liquid-glass .value-card, .ios-liquid-glass .v-card-row, .ios-liquid-glass .card, .ios-liquid-glass .school-highlight { position: relative; overflow: hidden; background: linear-gradient(145deg, rgba(255,255,255,.76), rgba(220,241,255,.42)); border-color: rgba(255,255,255,.82); box-shadow: 0 15px 34px rgba(27,74,111,.14), inset 0 1.5px 1px rgba(255,255,255,.9), inset 0 -1px 1px rgba(33,92,132,.1); }
    .ios-liquid-glass .event-card::before, .ios-liquid-glass .program-card::before, .ios-liquid-glass .value-card::before, .ios-liquid-glass .v-card-row::before, .ios-liquid-glass .card::before, .ios-liquid-glass .school-highlight::before { position: absolute; z-index: 0; top: 0; right: 8%; left: 8%; height: 38%; border-radius: 0 0 55% 55%; content: ""; background: linear-gradient(180deg, rgba(255,255,255,.62), rgba(255,255,255,0)); pointer-events: none; }
    .ios-liquid-glass .event-card > *, .ios-liquid-glass .program-card > *, .ios-liquid-glass .value-card > *, .ios-liquid-glass .v-card-row > *, .ios-liquid-glass .card > *, .ios-liquid-glass .school-highlight > * { position: relative; z-index: 1; }
    .ios-liquid-glass .event-card img, .ios-liquid-glass .program-card img { border: 1px solid rgba(255,255,255,.74); box-shadow: 0 6px 16px rgba(25,72,106,.16); opacity: .94; }
    .ios-liquid-glass .school-highlight__item { background: linear-gradient(145deg, rgba(255,255,255,.62), rgba(206,235,252,.34)); box-shadow: inset 0 1px 1px rgba(255,255,255,.8); }
    .ios-liquid-glass .btn-abt, .ios-liquid-glass .btn-cnt, .ios-liquid-glass .back-to-top { border: 1px solid rgba(255,255,255,.38); background: rgba(30,82,130,.72); -webkit-backdrop-filter: blur(12px); backdrop-filter: blur(12px); box-shadow: 0 8px 20px rgba(24,61,96,.2), inset 0 1px 0 rgba(255,255,255,.25); }
    .ios-liquid-glass .footer { background: rgba(21,53,85,.82); -webkit-backdrop-filter: blur(20px) saturate(140%); backdrop-filter: blur(20px) saturate(140%); border-top: 1px solid rgba(255,255,255,.16); }
    @media (max-width: 768px) { .ios-liquid-glass .hero { margin: 12px 14px 0; border-radius: 20px; } }
    .menu ul li a.active { background: #2563a8; color: #fff; box-shadow: 0 4px 10px rgba(15, 45, 75, .22); }
    @media (max-width: 767px) { header .menu { position: absolute; top: calc(100% + 8px); left: 12px; right: 12px; width: auto; margin: 0; padding: 8px; border-radius: 14px; background: #1e3a5f; box-shadow: 0 14px 30px rgba(15, 35, 58, .24); } header .menu ul { gap: 4px; padding: 0; } header .menu ul li { width: 100%; margin: 0; padding: 0; border: 0; } header .menu ul li a { display: block; width: 100%; padding: 12px 16px; border-radius: 9px; text-align: left; } header .menu ul li a:hover, header .menu ul li a:focus-visible { background: rgba(255,255,255,.12); color: #fff; } }
    @media (max-width: 767px) { .ios-liquid-glass header .menu { padding: 8px; border: 1px solid rgba(255,255,255,.42); border-radius: 18px; background: rgba(26,66,103,.62); -webkit-backdrop-filter: blur(22px) saturate(155%); backdrop-filter: blur(22px) saturate(155%); } .ios-liquid-glass header .menu ul { flex-direction: row; gap: 8px; padding: 0; overflow-x: auto; scroll-snap-type: x mandatory; scrollbar-width: none; -webkit-overflow-scrolling: touch; touch-action: pan-x; } .ios-liquid-glass header .menu ul::-webkit-scrollbar { display: none; } .ios-liquid-glass header .menu ul li { flex: 0 0 118px; } .ios-liquid-glass header .menu ul li a { padding: 12px 14px; border: 1px solid rgba(255,255,255,.16); border-radius: 12px; background: rgba(255,255,255,.08); text-align: center; scroll-snap-align: center; } .ios-liquid-glass header .menu ul li a.active { background: rgba(88,161,218,.78); box-shadow: 0 5px 13px rgba(6,31,56,.25), inset 0 1px 0 rgba(255,255,255,.28); } }
    @media (max-width: 767px) { header .menu { display: block; max-height: 0; overflow: hidden; visibility: hidden; opacity: 0; pointer-events: none; transform: translateY(-12px); transition: max-height .32s ease, opacity .2s ease, transform .32s ease, visibility 0s linear .32s; } header .menu.open { display: block; max-height: 320px; visibility: visible; opacity: 1; pointer-events: auto; transform: translateY(0); transition: max-height .32s ease, opacity .2s ease, transform .32s ease; } .ios-liquid-glass header .menu.open { max-height: 130px; } }
    @media (max-width: 767px) { .ios-liquid-glass header .menu { padding: 10px; } .ios-liquid-glass header .menu ul { gap: 10px; } .ios-liquid-glass header .menu ul li { flex-basis: 92px; } .ios-liquid-glass header .menu ul li a { display: flex; min-height: 86px; padding: 9px 6px; flex-direction: column; align-items: center; justify-content: center; gap: 5px; border-radius: 22px; color: #e9f5ff; font-size: .7rem; font-weight: 600; letter-spacing: 0; } .ios-liquid-glass header .menu ul li a::before { display: block; color: currentColor; font-family: Arial, sans-serif; font-size: 29px; font-weight: 400; line-height: 1; } .ios-liquid-glass header .menu ul li a[href="Home.html"]::before { content: "\\2302"; } .ios-liquid-glass header .menu ul li a[href="about.html"]::before { content: "\\2139"; } .ios-liquid-glass header .menu ul li a[href="event.html"]::before { content: "\\2605"; } .ios-liquid-glass header .menu ul li a[href="program.html"]::before { content: "\\25C8"; } .ios-liquid-glass header .menu ul li a.active { color: #174d7c; border-color: rgba(255,255,255,.75); background: rgba(246,252,255,.82); transform: translateY(-2px); box-shadow: 0 7px 18px rgba(4,30,54,.28), inset 0 1px 0 #fff; } }
    @media (max-width: 767px) { .ios-liquid-glass header .menu { position: absolute; isolation: isolate; background: linear-gradient(135deg, rgba(255,255,255,.32), rgba(89,152,203,.34) 48%, rgba(255,255,255,.16)); box-shadow: 0 18px 40px rgba(5,35,63,.3), inset 0 1.5px 1px rgba(255,255,255,.86), inset 0 -1px 1px rgba(12,54,90,.22); } .ios-liquid-glass header .menu::before { position: absolute; z-index: -1; top: 1px; right: 1px; left: 1px; height: 48%; border-radius: 17px 17px 50% 50%; content: ""; background: linear-gradient(180deg, rgba(255,255,255,.54), rgba(255,255,255,.05)); filter: blur(1px); pointer-events: none; } .ios-liquid-glass header .menu ul { position: relative; z-index: 1; } .ios-liquid-glass header .menu ul li a { position: relative; overflow: hidden; border-color: rgba(255,255,255,.4); background: linear-gradient(145deg, rgba(255,255,255,.2), rgba(255,255,255,.05)); box-shadow: inset 0 1px 1px rgba(255,255,255,.34), inset 0 -1px 1px rgba(8,47,80,.15); -webkit-backdrop-filter: blur(12px) saturate(135%); backdrop-filter: blur(12px) saturate(135%); } .ios-liquid-glass header .menu ul li a::after { position: absolute; top: 1px; right: 7px; left: 7px; height: 34%; border-radius: 50%; content: ""; background: linear-gradient(180deg, rgba(255,255,255,.43), rgba(255,255,255,0)); pointer-events: none; } .ios-liquid-glass header .menu ul li a.active { background: linear-gradient(145deg, rgba(255,255,255,.96), rgba(184,225,251,.62)); box-shadow: 0 8px 20px rgba(4,30,54,.27), inset 0 1.5px 1px #fff, inset 0 -1px 1px rgba(35,109,163,.16); } }
    @media (max-width: 767px) { .ios-liquid-glass header .menu ul li a { color: #e7f7ff; text-shadow: 0 1px 2px rgba(7,39,69,.7); } .ios-liquid-glass header .menu ul li a::before { color: #8ee3ff; filter: drop-shadow(0 1px 2px rgba(7,39,69,.55)); } .ios-liquid-glass header .menu ul li a.active, .ios-liquid-glass header .menu ul li a[aria-current="page"] { color: #0e4d7b; text-shadow: none; outline: 2px solid rgba(255,255,255,.72); outline-offset: -2px; } .ios-liquid-glass header .menu ul li a.active::before, .ios-liquid-glass header .menu ul li a[aria-current="page"]::before { color: #176da5; filter: none; } }
    @media (max-width: 767px) { .ios-liquid-glass header .menu.open { max-height: 104px; } .ios-liquid-glass header .menu ul li { flex-basis: 78px; } .ios-liquid-glass header .menu ul li a { min-height: 62px; padding: 7px 5px; gap: 3px; border-radius: 11px; color: #ffffff; font-size: .68rem; text-shadow: 0 1px 2px rgba(4,29,53,.85); } .ios-liquid-glass header .menu ul li a::before { font-size: 21px; color: #b8edff; } .ios-liquid-glass header .menu ul li a::after { display: none; } .ios-liquid-glass header .menu ul li a.active, .ios-liquid-glass header .menu ul li a[aria-current="page"] { color: #083f6c; background: linear-gradient(145deg, rgba(255,255,255,.98), rgba(193,229,250,.82)); outline: 2px solid rgba(255,255,255,.9); text-shadow: none; } }
    @media (max-width: 767px) { .ios-liquid-glass header .menu ul { width: 100%; } .ios-liquid-glass header .menu ul li { flex: 1 0 78px; } .ios-liquid-glass header .menu ul li a { width: 100%; } .ios-liquid-glass header .menu ul li a[href="Home.html"].active, .ios-liquid-glass header .menu ul li a[href="Home.html"][aria-current="page"] { color: #083f6c; background: linear-gradient(145deg, rgba(255,255,255,.98), rgba(193,229,250,.82)); outline: 2px solid rgba(255,255,255,.9); } }
    .menu-icon:focus-visible, .back-to-top:focus-visible { outline: 3px solid #f7c948; outline-offset: 3px; }
    .js-reveal { opacity: 0; transform: translate3d(0, calc(18px + var(--scroll-sway, 0px)), 0); transition: opacity .55s ease, transform .55s ease; }
    .js-reveal.is-visible { opacity: 1; transform: translate3d(0, var(--scroll-sway, 0px), 0); }
    .sway-banner { will-change: transform; }
    .school-highlight { width: min(100%, 510px); margin-left: 50px; padding: 32px; border-radius: 22px; color: #eef6ff; background: linear-gradient(145deg, #1e3a5f, #28588b); box-shadow: 0 18px 40px rgba(30, 58, 95, .22); }
    .school-highlight__eyebrow { margin: 0 0 8px; color: #f7c948; font-size: .76rem; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; }
    .school-highlight h2 { margin: 0; font-size: 1.8rem; line-height: 1.25; }
    .school-highlight > p:last-child { margin: 10px 0 0; color: #d6e5f5; line-height: 1.65; }
    .school-highlight__grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-top: 24px; }
    .school-highlight__item { padding: 12px 8px; text-align: center; border-radius: 12px; background: rgba(255, 255, 255, .11); }
    .school-highlight__item strong { display: block; color: #fff; font-size: 1.1rem; }
    .school-highlight__item > span { display: block; margin-top: 3px; color: #d6e5f5; font-size: .72rem; }
    .slot-digit { display: inline-block; height: 1.15em; overflow: hidden; vertical-align: top; line-height: 1.15; }
    .slot-reel { display: flex; flex-direction: column; transition: transform 1.15s cubic-bezier(.16, .85, .28, 1); }
    .slot-reel span { height: 1.15em; line-height: 1.15; }
    .slot-symbol { display: inline-block; vertical-align: top; }
    @media (min-width: 769px) { .description { position: sticky; top: 108px; align-self: flex-start; transform-origin: top left; transition: transform .3s ease, opacity .3s ease; } .description.is-compact { transform: translateY(-6px) scale(.94); opacity: .96; } }
    @media (max-width: 768px) { .school-highlight { margin-left: 0; } }
    .event-card, .program-card, .value-card, .card { transition: transform .2s ease, box-shadow .2s ease; }
    .event-card:hover, .program-card:hover, .value-card:hover, .card:hover { transform: translateY(-5px); box-shadow: 0 12px 24px rgba(30, 58, 95, .14); }
    .back-to-top { position: fixed; right: 22px; bottom: 22px; z-index: 90; width: 44px; height: 44px; border: 0; border-radius: 50%; background: #1e3a5f; color: #fff; font-size: 24px; line-height: 1; cursor: pointer; box-shadow: 0 6px 18px rgba(15, 35, 58, .3); opacity: 0; pointer-events: none; transform: translateY(10px); transition: opacity .2s ease, transform .2s ease, background .2s ease; }
    .back-to-top:hover { background: #2563eb; }
    .back-to-top.is-visible { opacity: 1; pointer-events: auto; transform: translateY(0); }
    @media (prefers-reduced-motion: reduce) { *, *::before, *::after { scroll-behavior: auto !important; animation-duration: .01ms !important; transition-duration: .01ms !important; } .js-reveal { opacity: 1; transform: none; } }
  `;
  document.head.append(interactionStyles);
  const header = document.querySelector("header");
  let menuButton = document.querySelector(".menu-icon");
  const menu = document.querySelector(".menu");
  const homeDescription = document.querySelector("main .description");

  // Upgrade the legacy menu div into a real button for dependable touch interaction.
  if (menuButton && menuButton.tagName !== "BUTTON") {
    const button = document.createElement("button");
    button.className = menuButton.className;
    button.type = "button";
    button.setAttribute("aria-label", "Open navigation menu");
    button.innerHTML = "&#9776;";
    menuButton.replaceWith(button);
    menuButton = button;
  }

  // Replace a missing home-banner image with useful school information.
  const homeImageArea = document.querySelector("main .main-img");
  const homeBannerImage = homeImageArea?.querySelector("img");
  const animateSlotNumber = (number) => {
    const value = number.textContent.trim();
    number.setAttribute("aria-label", value);
    number.textContent = "";
    [...value].forEach((character, index) => {
      if (!/\d/.test(character)) {
        const symbol = document.createElement("span");
        symbol.className = "slot-symbol";
        symbol.textContent = character;
        number.append(symbol);
        return;
      }
      const digit = document.createElement("span");
      const reel = document.createElement("span");
      digit.className = "slot-digit";
      reel.className = "slot-reel";
      // Three complete loops make each digit feel like a small slot reel.
      for (let loop = 0; loop < 3; loop += 1) {
        for (let value = 0; value <= 9; value += 1) {
          const face = document.createElement("span");
          face.textContent = value;
          reel.append(face);
        }
      }
      digit.append(reel);
      number.append(digit);
      requestAnimationFrame(() => {
        setTimeout(() => {
          reel.style.transform = `translateY(-${(20 + Number(character)) * 1.15}em)`;
        }, index * 90 + 80);
      });
    });
  };
  const addHomeHighlight = () => {
    if (!homeImageArea || homeImageArea.querySelector(".school-highlight")) return;
    homeBannerImage?.remove();
    const highlight = document.createElement("aside");
    highlight.className = "school-highlight";
    highlight.setAttribute("aria-label", "Newtown International School highlights");
    highlight.innerHTML = `
      <p class="school-highlight__eyebrow">Learning beyond the classroom</p>
      <h2>A welcoming place to learn, grow, and lead.</h2>
      <div class="school-highlight__grid">
        <div class="school-highlight__item"><strong>1,200+</strong><span>Students</span></div>
        <div class="school-highlight__item"><strong>100+</strong><span>Teachers</span></div>
        <div class="school-highlight__item"><strong>27</strong><span>Years strong</span></div>
      </div>
      <p>Discover academics, clubs, culture, and a community that supports every learner.</p>`;
    homeImageArea.append(highlight);
    highlight.querySelectorAll(".school-highlight__item strong").forEach(animateSlotNumber);
  };
  if (homeBannerImage) {
    homeBannerImage.addEventListener("error", addHomeHighlight, { once: true });
    if (homeBannerImage.complete && !homeBannerImage.naturalWidth) addHomeHighlight();
  }

  // Mark the current page in the navigation and make the mobile menu accessible.
  const pageName = window.location.pathname.split("/").pop().toLowerCase();
  const currentPage = !pageName || pageName === "index.html" ? "home.html" : pageName;
  document.querySelectorAll(".menu a").forEach((link) => {
    const linkPage = link.getAttribute("href").split("/").pop().toLowerCase();
    const isCurrentPage = linkPage === currentPage;
    link.classList.toggle("active", isCurrentPage);
    if (isCurrentPage) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });

  if (menuButton && menu) {
    menuButton.setAttribute("role", "button");
    menuButton.setAttribute("tabindex", "0");
    menuButton.setAttribute("aria-label", "Open navigation menu");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.textContent = "☰";

    const setMenu = (isOpen) => {
      menu.classList.toggle("open", isOpen);
      if (isOpen) {
        menu.style.display = "block";
        menu.style.maxHeight = isIOS ? "130px" : "320px";
        menu.style.visibility = "visible";
        menu.style.opacity = "1";
        menu.style.pointerEvents = "auto";
      } else {
        menu.style.removeProperty("display");
        menu.style.removeProperty("max-height");
        menu.style.removeProperty("visibility");
        menu.style.removeProperty("opacity");
        menu.style.removeProperty("pointer-events");
      }
      menuButton.textContent = isOpen ? "×" : "☰";
      menuButton.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
      menuButton.setAttribute("aria-expanded", String(isOpen));
      if (isOpen && isIOS) {
        menu.querySelector('a[aria-current="page"]')?.scrollIntoView({ block: "nearest", inline: "center" });
      }
    };

    const toggleMenu = () => setMenu(!menu.classList.contains("open"));
    // Capture taps first so mobile browsers always open the menu exactly once.
    menuButton.addEventListener("click", (event) => {
      if (window.innerWidth > 767) return;
      event.preventDefault();
      event.stopImmediatePropagation();
      const isOpen = !menu.classList.contains("open");
      setMenu(isOpen);
      menuButton.innerHTML = isOpen ? "&times;" : "&#9776;";
    }, true);
    menuButton.addEventListener("click", toggleMenu);
    menuButton.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggleMenu();
      }
    });
    menu.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => setMenu(false)));
    document.addEventListener("click", (event) => {
      if (!header.contains(event.target)) setMenu(false);
    });
    window.addEventListener("resize", () => {
      if (window.innerWidth > 767) setMenu(false);
    });
  }

  // Use HTML entities so the mobile control renders correctly regardless of file encoding.
  if (menuButton && menu) {
    menuButton.innerHTML = "&#9776;";
    menuButton.addEventListener("click", () => {
      requestAnimationFrame(() => {
        menuButton.innerHTML = menu.classList.contains("open") ? "&times;" : "&#9776;";
      });
    });
    menuButton.addEventListener("keydown", () => {
      requestAnimationFrame(() => {
        menuButton.innerHTML = menu.classList.contains("open") ? "&times;" : "&#9776;";
      });
    });
  }

  // Give longer pages a clear visual rhythm without adding distracting effects.
  const revealItems = document.querySelectorAll(
    ".description, .main-img, .hero, .section, .state, section, .event-card, .program-card, .value-card, .v-card-row"
  );
  revealItems.forEach((item) => item.classList.add("js-reveal"));
  document.querySelectorAll(".main-img, .hero").forEach((item) => item.classList.add("sway-banner"));

  const updateReveals = () => {
    revealItems.forEach((item) => {
      const bounds = item.getBoundingClientRect();
      if (bounds.top < window.innerHeight * 0.94 && bounds.bottom > 0) {
        item.classList.add("is-visible");
      }
    });
  };
  // This continuous visibility check stays reliable when images or fonts change layout.
  requestAnimationFrame(updateReveals);
  window.addEventListener("resize", updateReveals, { passive: true });

  // Count school figures up once they become visible.
  const statNumbers = document.querySelectorAll(".state-card .card h2");
  const animateNumber = (element) => {
    const original = element.textContent.trim();
    const numericValue = Number(original.replace(/[^0-9.]/g, ""));
    if (!numericValue) return;
    const suffix = original.replace(/[0-9,.]/g, "");
    const duration = 900;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      element.textContent = `${Math.round(numericValue * (1 - Math.pow(1 - progress, 3))).toLocaleString()}${suffix}`;
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  if (statNumbers.length) {
    const statsObserver = new IntersectionObserver((entries, observer) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        statNumbers.forEach(animateNumber);
        observer.disconnect();
      }
    }, { threshold: 0.4 });
    statsObserver.observe(statNumbers[0].closest(".state-card"));
  }

  // Keep the footer current and make external destinations safer.
  document.querySelectorAll(".footer-bottom span").forEach((item) => {
    item.textContent = `© ${new Date().getFullYear()} NIS. All rights reserved.`;
  });
  document.querySelectorAll('a[target="_blank"]').forEach((link) => {
    link.rel = "noopener noreferrer";
  });
  document.querySelectorAll("img").forEach((image) => {
    if (!image.closest(".main-img")) image.loading = "lazy";
  });

  const topButton = document.createElement("button");
  topButton.className = "back-to-top";
  topButton.type = "button";
  topButton.setAttribute("aria-label", "Back to top");
  topButton.innerHTML = "↑";
  topButton.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  document.body.append(topButton);
  const updateHeader = () => {
    header?.classList.toggle("is-scrolled", window.scrollY > 12);
    topButton.classList.toggle("is-visible", window.scrollY > 360);
    homeDescription?.classList.toggle("is-compact", window.scrollY > 70);
    const sway = Math.max(-16, Math.min(16, -window.scrollY * 0.025));
    document.querySelectorAll(".sway-banner").forEach((banner) => {
      banner.style.setProperty("--scroll-sway", `${sway}px`);
    });
    updateReveals();
  };
  window.addEventListener("scroll", updateHeader, { passive: true });
  updateHeader();
});
