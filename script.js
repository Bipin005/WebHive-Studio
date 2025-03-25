document.addEventListener('DOMContentLoaded', (event) => {
    function setFontSize() {
        if (window.innerWidth <= 1920 && window.innerWidth >= 768) {
            document.body.style.fontSize = window.innerWidth / 1440 + "rem";
        } else {
            if (document.body.style.removeProperty) {
                document.body.style.removeProperty("font-size");
            } else {
                document.body.style.removeAttribute("font-size");
            }
        }
    }
    window.addEventListener("resize", function () { setFontSize(); });
    setFontSize();
});

window.addEventListener('load', (event) => {
    document.getElementById('p-hardt-studio').addEventListener('click', () => {
        fathom.trackGoal('0KMNK7UH', 0);
    });
    document.getElementById('p-true-origins').addEventListener('click', () => {
        fathom.trackGoal('FHA2MN3G', 0);
    });
    document.getElementById('p-saol').addEventListener('click', () => {
        fathom.trackGoal('6SMIGBS0', 0);
    });
    document.getElementById('p-artmoney').addEventListener('click', () => {
        fathom.trackGoal('EFOAZSBC', 0);
    });
    document.getElementById('p-ohmie-go').addEventListener('click', () => {
        fathom.trackGoal('2OLETFRC', 0);
    });
    document.getElementById('p-fairsupply').addEventListener('click', () => {
        fathom.trackEvent('Clicked: Fair Supply');
    });
    document.getElementById('p-colinsamir').addEventListener('click', () => {
        fathom.trackEvent('Clicked: Colin & Samir');
    });
});