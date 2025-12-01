let selectedBranch = null;
let selectedBranchTitle = null;

function staffClick() {
    alert("Staff login coming soon!");
}

// Only needed for branch grid page
window.addEventListener("DOMContentLoaded", function () {
    // nothing else: just show branchSelect as in HTML
});

function openBranchOptions(branch, branchTitle) {
    selectedBranch = branch;
    selectedBranchTitle = branchTitle;

    // In case you want to use later:
    localStorage.setItem("selectedBranch", branch);
    localStorage.setItem("selectedBranchTitle", branchTitle);

    // Go to new page that shows login / signup options
    const url = `branch-options.html?branch=${encodeURIComponent(branch)}&name=${encodeURIComponent(branchTitle)}`;
    window.location.href = url;
}
