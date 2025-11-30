window.onload = function() {
    hideAll();
    document.getElementById("home").style.display = "block";
};

// Input validation
function validateName(event) {
    const ch = String.fromCharCode(event.which || event.keyCode);
    // Accept only: letters, spaces, special chars (no digits)
    if (/^[a-zA-Z\s!@#$%^&*()\-_=+{}\[\]:;"'<>,.?\/|\\`~]$/.test(ch)) return true;
    return false;
}

function handleNamePaste(event) {
    let paste = (event.clipboardData || window.clipboardData).getData('text');
    if (/[0-9]/.test(paste)) event.preventDefault();
}

function validateRoll(event) {
    const ch = String.fromCharCode(event.which || event.keyCode);
    // Accept letters, numbers, special chars
    if (/^[a-zA-Z0-9!@#$%^&*()\-_=+{}\[\]:;"'<>,.?\/|\\`~]$/.test(ch)) return true;
    return false;
}

function handleRollPaste(event) {
    let paste = (event.clipboardData || window.clipboardData).getData('text');
    if (/[^a-zA-Z0-9!@#$%^&*()\-_=+{}\[\]:;"'<>,.?\/|\\`~]/.test(paste)) event.preventDefault();
}

function validatePhone(input) {
    input.value = input.value.replace(/[^0-9]/g, '').slice(0, 10);
}

function staffClick() {
    alert("Staff login coming soon!");
}

function showStudentMenu() {
    hideAll();
    document.getElementById("branchSelect").style.display = "block";
}

function closeBranchMenu() {
    hideAll();
    document.getElementById("home").style.display = "block";
}

let selectedBranch = null;
let selectedBranchTitle = null;

function openBranchOptions(branch, branchTitle) {
    selectedBranch = branch;
    selectedBranchTitle = branchTitle;
    hideAll();
    document.getElementById("branchOptImg").src = branch + ".jpg";
    document.getElementById("branchOptName").textContent = branchTitle;
    document.getElementById("branchOptions").style.display = "block";
}

function showLoginFromBranch() {
    // empty for now – you can connect real login later
}

function showSignupFromBranch() {
    hideAll();
    document.getElementById("signupBranchImg").src = selectedBranch + ".jpg";
    document.getElementById("signupBranchImg").style.display = "inline-block";
    document.getElementById("signupBranchName").textContent = selectedBranchTitle;
    document.getElementById("signup").style.display = "flex";
}

function backToBranchSelect() {
    hideAll();
    document.getElementById("branchSelect").style.display = "block";
}

function cancelToBranchOptions() {
    hideAll();
    document.getElementById("branchOptions").style.display = "block";
}

function hideAll() {
    let blocks = ["home","branchSelect","branchOptions","studentOptions","login","signup","dashboard","loginOtpStep"];
    for (let b of blocks) {
        let e = document.getElementById(b);
        if (e) e.style.display = "none";
    }
    ["loginError","signupError","loginOtpError"].forEach(id => {
        let el = document.getElementById(id);
        if (el) el && el.classList.add("hidden");
    });
}
