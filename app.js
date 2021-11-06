var states = {
    'MA': 'Massachusetts',
    'CT': 'Connecticut',
    'RI': 'Rhode Island',
    'AL': 'Alabama',
    'AK': 'Alaska',
    'AZ': 'Arizona',
    'AR': 'Arkansas',
    'CA': 'California',
    'CO': 'Colorado',
    'DE': 'Delaware',
    'FL': 'Florida',
    'GA': 'Georgia',
    'HI': 'Hawaii',
    'ID': 'Idaho',
    'IL': 'Illinois',
    'IN': 'Indiana',
    'IA': 'Iowa',
    'KS': 'Kansas',
    'KY': 'Kentucky',
    'LA': 'Louisiana',
    'ME': 'Maine',
    'MD': 'Maryland',
    'MI': 'Michigan',
    'MN': 'Minnesota',
    'MS': 'Mississippi',
    'MO': 'Missouri',
    'MT': 'Montana',
    'NE': 'Nebraska',
    'NV': 'Nevada',
    'NH': 'New Hampshire',
    'NJ': 'New Jersey',
    'NM': 'New Mexico',
    'NY': 'New York',
    'NC': 'North Carolina',
    'ND': 'North Dakota',
    'OH': 'Ohio',
    'OK': 'Oklahoma',
    'OR': 'Oregon',
    'PA': 'Pennsylvania',
    'SC': 'South Carolina',
    'SD': 'South Dakota',
    'TN': 'Tennessee',
    'TX': 'Texas',
    'UT': 'Utah',
    'VT': 'Vermont',
    'VA': 'Virginia',
    'WA': 'Washington',
    'WV': 'West Virginia',
    'WI': 'Wisconsin',
    'WY': 'Wyoming',
    'DC': 'District of Columbia'
}
function changeLinks(id) {
    var state = document.getElementById('state')
    var news = document.getElementById('news')
    var char = document.getElementById('charity')
    var news_link_object = document.getElementById('news_link')
    var char_link_object = document.getElementById('char_link')
    if (id === 'none') {
        state.innerHTML = 'Click on a State!'
        news.innerHTML = 'To View Related Refugee News'
        char.innerHTML = 'To View Related Refugee Charities'
        news_link_object.setAttribute("href", "#")
        news_link_object.setAttribute("target", "_self")
        char_link_object.setAttribute('href', "#")
        char_link_object.setAttribute("target", "_self")
    }
    else {
        state.innerHTML = states[id]
        news_link_object.setAttribute("target", "_blank")
        news_link_object.setAttribute("href", `https://news.google.com/search?q=Refugees%20${states[id]}&hl=en-US&gl=US&ceid=US%3Aen`)
        news.innerHTML = `Refugee News on ${states[id]}`

        char_link_object.setAttribute("target", "_blank")
        char_link_object.setAttribute("href", `https://www.charitynavigator.org/index.cfm?keyword_list=refugee&bay=search.results&EIN=&cgid=&cuid=&location=2&state=${id}&city=&overallrtg=&size=&scopeid=`)
        char.innerHTML = `View Refugee Charities on ${states[id]}`
    }


}
document.getElementById('AL').onclick = function () { changeLinks('AL') };
document.getElementById('AK').onclick = function () { changeLinks('AK') };
document.getElementById('AZ').onclick = function () { changeLinks('AZ') };
document.getElementById('AR').onclick = function () { changeLinks('AR') };
document.getElementById('CA').onclick = function () { changeLinks('CA') };
document.getElementById('CO').onclick = function () { changeLinks('CO') };
document.getElementById('CT').onclick = function () { changeLinks('CT') };
document.getElementById('DE').onclick = function () { changeLinks('DE') };
document.getElementById('FL').onclick = function () { changeLinks('FL') };
document.getElementById('GA').onclick = function () { changeLinks('GA') };
document.getElementById('HI').onclick = function () { changeLinks('HI') };
document.getElementById('ID').onclick = function () { changeLinks('ID') };
document.getElementById('IL').onclick = function () { changeLinks('IL') };
document.getElementById('IN').onclick = function () { changeLinks('IN') };
document.getElementById('IA').onclick = function () { changeLinks('IA') };
document.getElementById('KS').onclick = function () { changeLinks('KS') };
document.getElementById('KY').onclick = function () { changeLinks('KY') };
document.getElementById('LA').onclick = function () { changeLinks('LA') };
document.getElementById('ME').onclick = function () { changeLinks('ME') };
document.getElementById('MD').onclick = function () { changeLinks('MD') };
document.getElementById('MA').onclick = function () { changeLinks('MA') };
document.getElementById('MI').onclick = function () { changeLinks('MI') };
document.getElementById('MN').onclick = function () { changeLinks('MN') };
document.getElementById('MS').onclick = function () { changeLinks('MS') };
document.getElementById('MO').onclick = function () { changeLinks('MO') };
document.getElementById('MT').onclick = function () { changeLinks('MT') };
document.getElementById('NE').onclick = function () { changeLinks('NE') };
document.getElementById('NV').onclick = function () { changeLinks('NV') };
document.getElementById('NH').onclick = function () { changeLinks('NH') };
document.getElementById('NJ').onclick = function () { changeLinks('NJ') };
document.getElementById('NM').onclick = function () { changeLinks('NM') };
document.getElementById('NY').onclick = function () { changeLinks('NY') };
document.getElementById('NC').onclick = function () { changeLinks('NC') };
document.getElementById('ND').onclick = function () { changeLinks('ND') };
document.getElementById('OH').onclick = function () { changeLinks('OH') };
document.getElementById('OK').onclick = function () { changeLinks('OK') };
document.getElementById('OR').onclick = function () { changeLinks('OR') };
document.getElementById('PA').onclick = function () { changeLinks('PA') };
document.getElementById('RI').onclick = function () { changeLinks('RI') };
document.getElementById('SC').onclick = function () { changeLinks('SC') };
document.getElementById('SD').onclick = function () { changeLinks('SD') };
document.getElementById('TN').onclick = function () { changeLinks('TN') };
document.getElementById('TX').onclick = function () { changeLinks('TX') };
document.getElementById('UT').onclick = function () { changeLinks('UT') };
document.getElementById('VT').onclick = function () { changeLinks('VT') };
document.getElementById('VA').onclick = function () { changeLinks('VA') };
document.getElementById('WA').onclick = function () { changeLinks('WA') };
document.getElementById('WV').onclick = function () { changeLinks('WV') };
document.getElementById('WI').onclick = function () { changeLinks('WI') };
document.getElementById('WY').onclick = function () { changeLinks('WY') };
document.getElementById('DC').onclick = function () { changeLinks('DC') };

document.getElementById('state_selector').onchange = function () {
    changeLinks(document.getElementById('state_selector').value)
};
console.log(document.getElementById('state_selector').value)