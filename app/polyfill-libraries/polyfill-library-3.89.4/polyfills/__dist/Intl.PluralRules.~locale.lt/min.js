Intl.PluralRules&&"function"==typeof Intl.PluralRules.__addLocaleData&&Intl.PluralRules.__addLocaleData({locale:"lt",categories:{cardinal:["one","few","many","other"],ordinal:["other"]},fn:function(l,e){var a=String(l).split("."),t=a[1]||"",n=Number(a[0])==l,r=n&&a[0].slice(-1),o=n&&a[0].slice(-2);return e?"other":1==r&&(o<11||o>19)?"one":r>=2&&r<=9&&(o<11||o>19)?"few":0!=t?"many":"other"}});