// code is meant to be copied in the console when navigating to a page on Twitter
MAX_SCROLL = 1000;
CUSTOM_SCROLL = 1; // less than MAX_SCROLL
// auto-unblocks via simulated scrolling on user's settings --> list of blocked users [NEED TO FIND SOURCE]
let autoUnblockSettings = setInterval(function() {
    window.scrollBy(0, window.innerHeight);
    document.querySelectorAll('[aria-label="Blocked"]').forEach(function(account) {
        account.click()
    });
}, CUSTOM_SCROLL);

/**
 * 
 * @param {String} txt 
 * @returns Array of DOM buttons with a label specified by "txt"
 */
function findButtonByType(txt) {
    spans = document.querySelectorAll('span');
    spans = Array.from(spans);
    actionUsers = spans.filter(x => x['innerText'] == txt);
    actionButtons = actionUsers.map(x => x.closest('div').parentNode);
    return actionButtons;
}

// Unblocks all followers of a certain user
let autoUnblockFollowers = setInterval(function() {
    window.scrollBy(0, window.innerHeight);
    const blockedButtons = findButtonByType("Blocked");
    blockedButtons.forEach(function(account) {
        account.click();
        // click confirmation dialogue that appears
        const unblockThis = findButtonByType("Unblock");
        unblockThis.forEach(x => x.click());
    });
}, 1000);