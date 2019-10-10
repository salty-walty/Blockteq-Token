const BigNumber = web3.BigNumber;

const BlockteqToken = artifacts.require('BlockteqToken');

require('chai')
	.use(require('chai-bignumber')(BigNumber))
	.should();

contract('BlockteqToken', accounts => {
	const _name = 'Blockteq Token';
	const _symbol = 'TEQ';
	const _decimals = 18;

	beforeEach(async function () {
		this.token = await BlockteqToken.new(_name, _symbol, _decimals);
	});

	describe('token attributes', function() {

		it('has the correct name', async function () {
			const name = await this.token.name();
			name.should.equal(_name);
		});
		
		it('has the correct symbol', async function () {
			const symbol = await this.token.symbol();
			symbol.should.equal(_symbol);
		});

		it('has the correct decimals', async function () {
			const decimals = await this.token.decimals();
			assert.equal(decimals, _decimals);
		});

	})
});