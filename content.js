
let elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(/Lääne-Viru Rakenduskõrgkool|Eesti Kunstiakadeemia|Eesti Maaülikool|Tallinna Tehnikaülikooli Virumaa Kolledž|Tallinna Tehnikaaülikooli Kuressaare Kolledž|Tallinna Tehnikaülikooli Eesti Mereakadeemia|Tallinna Tehnikaülikool|Eesti Muusika- ja Teatriakadeemia|Tallinna Tehnikaülikooli Kuressaare Kolledž|Tallinna Tehnikaülikooli Virumaa Kolledž|Tallinna Tehnikaülikooli Tartu Kolledž|Tartu Ülikool|Tartu Ülikooli Narva Kolledž|Tartu Ülikooli Pärnu Kolledž|Tartu Ülikooli Viljandi Kultuuriakadeemia|Tartu Ülikooli Johan Skytte poliitikauuringute Instituut|Estonian Business School|Estonian Business School in Helsinki|Kaitseväe Ühendatud Õppeasutused|Sisekaitseakadeemia|Tallinna Tervishoiu Kõrgkool|Tallinna Tehnikakõrgkool|Tartu Kõrgem   Kunstikool|Tartu Kõrgem Kunstikool|Eesti   Lennuakadeemia|Eesti Lennuakadeemia|Tartu Tervishoiu Kõrgkool|EELK Usuteaduste Instituut|EELK Usuteaduse Instituudi Tartu Teoloogia Akadeemia|Eesti EKB Liit Kõrgem Usuteaduslik Seminar|Eesti Ettevõtluskõrgkool Mainor|Eesti Metodisti Kiriku Teoloogiline Seminar|Estonian Business   School in Helsinki|Estonian   Business School|EELK   Usuteaduste Instituut|EELK Usuteaduse Instituudi Tartu   Teoloogia Akadeemia|Eesti EKB Liit Kõrgem Usuteaduslik Semin|Eesti EKB Liit Kõrgem Usuteaduslik Semin|Eesti Metodisti Kiriku   Teoloogiline Seminar|Lääne-Viru   Rakenduskõrgkool|Tartu   Tervishoiu Kõrgkool|Tartu   Ülikool|Euroakadeemia/gi, 'Tallinna Ülikool');
            
            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}