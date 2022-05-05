const REGEX_STATE = "twitter\.com.+/state\-affiliated";
/**
 * @returns Array of DOM a href elements that enclose a "this tweet links to a
 *          FOO state-affiliated media website" warning
 */
 function findStateMediaLinks() {
    const linkElems = Array.from(document.querySelectorAll('a'));
    const stateMediaLinks = linkElems.filter(x => {
        const link = x.getAttribute("href");
        return link.search(REGEX_STATE) > 0;
    });
    return stateMediaLinks;
}

function removeStateMediaDivs() {
    const links = findStateMediaLinks();
    if(!links) return;
    links.map(x => x.parentElement.remove());
}

/**
 * once the user clicks on a tweet linking to a "state-affiliated media website",
 * automatically click like on the prompt
 */
function clickLikeAnyway() {
    const spans = Array.from(document.querySelectorAll('span'));
    const like_anyway = spans.filter(x => x.getInnerHTML() == "Like this Tweet");
    like_anyway.map(x => {
        const bottom_row = x.parentElement.parentElement.parentElement;
        const bottom_divs = Array.from(bottom_row.childNodes);
        const has_svg = bottom_divs.filter(x => x.querySelector("svg") != null);
        has_svg.map(x => x.click());
    });
}