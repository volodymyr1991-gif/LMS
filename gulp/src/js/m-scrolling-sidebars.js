;(function(){

    function hidePrompts (nodeArr) {
        const forEach = [].forEach;

        forEach.call(nodeArr, item => {
            item.setAttribute('style', 'width: 0px; opacity: 0;');
        });
    }

    function positionCorrecting (node, parentHeight) {
        const top = -parentHeight + 200;
        node.setAttribute('style', `top: ${top}px;`);
    }

    function materialBarsPositionCheker (parentNode, navRightNode, navLeftNode, bool) {
        const barsParentPos = parentNode.getBoundingClientRect().top;

        if (barsParentPos <= 0) {
            positionCorrecting(navRightNode, barsParentPos);
            positionCorrecting(navLeftNode, barsParentPos);
        }
        if (bool) {
            positionCorrecting(navRightNode, barsParentPos);
            positionCorrecting(navLeftNode, barsParentPos);
        }
    }

    function chekPagePosition (pageNode, nodeArr) {
        const pagePosition = pageNode.getBoundingClientRect().top;

        if (pagePosition > 0) {
            setTimeout( () => {
                hidePrompts(nodeArr);
            }, 3000 )
        }
        if (pagePosition <= 0) {
            setTimeout( () => {
                hidePrompts(nodeArr);
            }, 1000 )
        }
    }


    function init() {
        const rightNavPrompts = document.getElementsByClassName('m-left-nav__prompt');
        const leftNav = document.getElementById('m-left-nav');
        const rightNav = document.getElementById('right-nav');
        const navParentNode = document.getElementById('main');
        const upBtn = document.getElementById('invBtnUp');

        chekPagePosition(navParentNode, rightNavPrompts);

        if (upBtn) {
            upBtn.addEventListener('click', () => {
                leftNav.removeAttribute('style');
                rightNav.removeAttribute('style');
            } )
        }

        document.addEventListener('scroll', () => materialBarsPositionCheker(navParentNode, rightNav, leftNav, false) );
    }

    if (document.getElementById('main')) {
        document.addEventListener('DOMContentLoaded', init);
    }

    // add events when you change your page content
const btnRender = document.querySelectorAll("li[data='theory']");
    if (document.querySelectorAll("li[data='theory']") ) {
        btnRender.forEach(elem => {
            elem.addEventListener('click', () => {
            setTimeout(init, 1000)
            })
        })
    }

})();
