let Parser = require('rss-parser');
let parser = new Parser();

async function feedTitleList(url) {
    let feed = await parser.parseURL(url);
    
    console.log(feed.title);

    feed.items.forEach(item => {
		    console.log(item.title);
    });
};

sampleUrl = 'https://www.yonhapnewstv.co.kr/category/news/headline/feed/';

feedTitleList(sampleUrl);