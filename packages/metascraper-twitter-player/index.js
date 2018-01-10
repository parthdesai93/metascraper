'use strict';

const { getUrl, isUrl } = require('@metascrapper/helpers');
const { isString } = require('lodash');


const wrap = rule => ({ htmlDom, url }) => {
    const value = rule(htmlDom, url);
    return isUrl(value) ? getUrl(value, url) : url;
}


module.exports = () => ({
    playerUrl: [
        wrap($ => $('meta[name="twitter:player"]').attr('value')),
        ($, url) => (isString(url) ? url : null)
    ]
});


