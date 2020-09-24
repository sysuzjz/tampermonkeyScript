// ==UserScript==
// @name         中移网课刷视频
// @namespace    http://panda.github.io/
// @version      0.1
// @description  中移网大自动刷视频
// @author       panda
// @match        https://wangda.chinamobile.com/*
// @grant        none
// @license      LGPLv3
// ==/UserScript==
(function() {
    'use strict';

    if (/^#\/study\/course\/detail\/subject-course/.test(location.hash)) {
        setInterval(function() {
            var replayBtn = document.querySelector('.videojs-referse-btn');
            if (replayBtn && !replayBtn.classList.contains('vjs-hidden')) {
                replayBtn.click();
            }
        }, 1000)
    }
})();