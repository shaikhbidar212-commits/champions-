let selectedBranch = null;
let selectedBranchTitle = null;

// ====== ON LOAD ======
window.onload = function () {
    const validViews = ["home", "branchSelect", "signup"];
    const hash = window.location.hash.replace("#", "");
    const initial = validViews.includes(hash) ? hash : "home";

    showView(initial, false);
    history.replaceState({ view: initial }, "", "#" + initial);
};

// ====== BROWSER / PHONE BACK ======
window.addEventListener("popstate", function (event) {
    if (event.state && event.state.view) {
        showView(event.state.view, false);
    } else {
        showView("home", false);
    }
});

// ====== VIEW NAVIGATION ======
function navigateTo(view) {
    showView(view, true);
}

function showView(view, pushToHistory) {
    hideAll();

    const el = document.getElementById(view);
    if (!el) return;

    if (view === "signup") el.style.display = "flex";
    else el.style.display = "block";

    const staffBtn = document.getElementById("staffBtn");
    if (staffBtn) {
        staffBtn.style.display = (view === "home") ? "inline-block" : "none";
    }

    if (pushToHistory) {
        history.pushState({ view }, "", "#" + view);
    }
}

// ====== NAVBAR ======
function staffClick() {
    alert("Staff login coming soon!");
}

function showStudentMenu() {
    navigateTo("branchSelect");
}

// ====== BRANCH FLOW (NOW: DO NOTHING ON CLICK) ======
function openBranchOptions(branch, branchTitle) {
    // future use: you can add navigation here later
    // for now: do nothing when branch clicked
    return;
}

// kept for future (not used now)
function showLoginFromBranch() {}
function showSignupFromBranch() {}

// cancel: just go back to branchSelect (if you ever open signup manually)
function cancelToBranchOptions() {
    navigateTo("branchSelect");
}

// ====== INPUT VALIDATION ======
function validateName(event) {
    const ch = String.fromCharCode(event.which || event.keyCode);
    if (/^[a-zA-Z\s!@#$%^&*()\-_=+{}\[\]:;"'<>,.?\/|\\`~]$/.test(ch)) return true;
    return false;
}

function handleNamePaste(event) {
    let paste = (event.clipboardData || window.clipboardData).getData('text');
    if (/[0-9]/.test(paste)) event.preventDefault();
}

function validateRoll(event) {
    const ch = String.fromCharCode(event.which || event.keyCode);
    if (/^[a-zA-Z0-9!@#$%^&*()\-_=+{}\[\]:;"'<>,.?\/|\\`~]$/.test(ch)) return true;
    return false;
}

function handleRollPaste(event) {
    let paste = (event.clipboardData || window.clipboardData).getData('text');
    if (/[^a-zA-Z0-9!@#$%^&*()\-_=+{}\[\]:;"'<>,.?\/|\\`~]/.test(paste)) event.preventDefault();
}

function validatePhone(input) {
    input.value = input.value.replace(/[^0-9]/g, "").slice(0, 10);
}

// ====== HIDE ALL ======
function hideAll() {
    let blocks = ["home","branchSelect","signup","studentOptions","login","dashboard","loginOtpStep"];
    blocks.forEach(id => {
        const e = document.getElementById(id);
        if (e) e.style.display = "none";
    });

    ["loginError","signupError","loginOtpError"].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.add("hidden");
    });
}

