Intl.PluralRules&&"function"==typeof Intl.PluralRules.__addLocaleData&&Intl.PluralRules.__addLocaleData({locale:"en",categories:{cardinal:["one","other"],ordinal:["one","two","few","other"]},fn:function(e,l){var o=String(e).split("."),t=!o[1],a=Number(o[0])==e,n=a&&o[0].slice(-1),r=a&&o[0].slice(-2);return l?1==n&&11!=r?"one":2==n&&12!=r?"two":3==n&&13!=r?"few":"other":1==e&&t?"one":"other"}});