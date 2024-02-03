const packageJson = require('../package.json');
const { expect } = require('chai');
const Ajv = require('ajv');
const buildListToken = require('../src/buildListToken');

const ajv = new Ajv({ allErrors: true, format: 'full' });

describe('buildList', () => {
  const defaultTokenList = buildListToken();

  it('contains no duplicate addresses', () => {
    const mapTokenList = {};    
    for (let token of defaultTokenList.tokens) {
      const key = token.address;
      expect(typeof mapTokenList[ key ])
        .to.equal('undefined');
        mapTokenList[ key ] = true;
    }
  });

  it('contains no duplicate symbols', () => {
    const mapTokenList = {};    
    for (let token of defaultTokenList.tokens) {
      const key = `${token.symbol}`;
      console.log("key",key)
      expect(typeof mapTokenList[ key ])
        .to.equal('undefined');
        mapTokenList[ key ] = true;
    }
  })

  it('version matches package.json', () => {
    expect(packageJson.version).to.match(/^\d+\.\d+\.\d+$/);
    expect(packageJson.version).to.equal(`${defaultTokenList.version.major}.${defaultTokenList.version.minor}.${defaultTokenList.version.patch}`);
  });
});