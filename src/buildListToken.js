const { version } = require('../package.json');
const tokenlist = require('./tokenlist/tokenlist.json');

module.exports = function buildList() {
  const parsed = version.split('.');
  return {
    'name': 'Lizard Token List',
    'timestamp': (new Date().toISOString()),
    'version': {
      'major': +parsed[ 0 ],
      'minor': +parsed[ 1 ],
      'patch': +parsed[ 2 ]
    },
    'tags': {},
    'logoURI': 'https://assets.coingecko.com/coins/images/13162/standard/rose.png',
    'keywords': [
      'lizard',
      'default'
    ],
    tokens: [
      ...tokenlist
    ]
  };
};