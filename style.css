let selectedBranch = null;
let selectedBranchTitle = null;

// ====== ON LOAD ======
window.onload = function () {
    const validViews = ["home", "branchSelect", "branchOptions"];
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

    el.style.display = "block";

    // Staff button only on home
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

// ====== BRANCH FLOW ======
function openBranchOptions(branch, branchTitle) {
    selectedBranch = branch;
    selectedBranchTitle = branchTitle;

    const img = document.getElementById("branchOptImg");
    const name = document.getElementById("branchOptName");
    if (img) img.src = branch + ".jpg";
    if (name) name.textContent = branchTitle;

    navigateTo("branchOptions");
}

function showLoginFromBranch() {
    alert("Login page will be added soon.");
}

// 👉 New Student → open signup.html with query parameters
function showSignupFromBranch() {
    if (!selectedBranch || !selectedBranchTitle) return;

    const url = `signup.html?branch=${encodeURIComponent(selectedBranch)}&name=${encodeURIComponent(selectedBranchTitle)}`;
    window.location.href = url;
}

// kept only for compatibility; not used now
function cancelToBranchOptions() {
    navigateTo("branchOptions");
}

// ====== INPUT VALIDATION (same as before) ======
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
    let blocks = ["home","branchSelect","branchOptions","studentOptions","login","signup","dashboard","loginOtpStep"];
    blocks.forEach(id => {
        const e = document.getElementById(id);
        if (e) e.style.display = "none";
    });

    ["loginError","signupError","loginOtpError"].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.add("hidden");
    });
}

