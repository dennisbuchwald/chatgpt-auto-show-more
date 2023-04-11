// ==UserScript==
// @name         ChatGPT Auto Show More for Safari
// @match        https://chat.openai.com/chat/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const targetNode = document.body;
    const config = { childList: true, subtree: true };
    const observer = new MutationObserver(autoShowMore);

    function autoShowMore() {
        const showMoreButton = document.querySelector('button.btn-dark');

        if (showMoreButton && showMoreButton.textContent.trim() === 'Show more') {
            showMoreButton.click();
        }
    }

    observer.observe(targetNode, config);
})();
