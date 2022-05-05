// code is meant to be copied in the console when navigating to a page on Twitter
const MAX_SCROLL = 1000;
// const CUSTOM_SCROLL = 1; // less than MAX_SCROLL

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
}, MAX_SCROLL);