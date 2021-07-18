MAX_SCROLL = 1000;
CUSTOM_SCROLL = 1; // less than MAX_SCROLL
let autoUnblock = setInterval(function() {
    window.scrollBy(0, window.innerHeight);
    document.querySelectorAll('[aria-label="Blocked"]').forEach(function(account) {
        account.click()
    });
}, CUSTOM_SCROLL);

function findButtonByType(txt) {
    spans = document.querySelectorAll('span');
    spans = Array.from(spans);
    actionUsers = spans.filter(x => x['innerText'] == txt);
    actionButtons = actionUsers.map(x => x.closest('div').parentNode);
    return actionButtons;
}

let autoUnblock = setInterval(function() {
    window.scrollBy(0, window.innerHeight);
    // spans = document.querySelectorAll('span');
    // spans = Array.from(spans);
    // blockedUsers = spans.filter(x => x['innerText'] == "Blocked");
    // blockedButtons = blockedUsers.map(x => x.closest('div').parentNode);
    const blockedButtons = findButtonByType("Blocked");
    blockedButtons.forEach(function(account) {
        account.click();
        const unblockThis = findButtonByType("Unblock");
        unblockThis.forEach(x => x.click());
    });
}, 1000);