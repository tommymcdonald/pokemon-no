window.onload = function() {
    var el = document.getElementsByTagName('*');
    var strings = [
        ' some app you feel you\'re too good to enjoy',
        ' this app that makes your friends inferior to you',
        ' that dumb app that all the dumb kids are playing'
    ];
    var randString = strings[Math.floor(Math.random() * strings.length)];

    for (var i = 0; i < el.length; i++) {
        var e = el[i];

        for (var k = 0; k < e.childNodes.length; k++) {
            var n = e.childNodes[k];
            if (n.nodeType === 3) {
                var text = n.nodeValue;
                var replacedText = text.replace(/(pokémon go)|(pokemon go)/gi, randString);
                if (replacedText != text) {
                    e.replaceChild(document.createTextNode(replacedText), n);
                }
            }
        }
    }
};