import { $ } from './utils/dom.js'

class VendingMachine {
	constructor() {
		this.productList = []
		this.coinList = [
			{ type: 500, quantity: 0 },
			{ type: 100, quantity: 0 },
			{ type: 50, quantity: 0 },
			{ type: 10, quantity: 0 },
		]

		this.render()
		this.renderTabContent('product-add-menu')
		this.initEventListener()
	}

	render() {
		$('#app').insertAdjacentHTML('afterbegin', this.getTemplate())
	}
	getTemplate() {
		return `        
    <h2>자판기 만들기🧃</h2>
    <nav id='nav-menu'>    
    <button id='product-add-menu'>상품 관리</button>
    <button id='vending-machine-manage-menu'>잔돈 충전</button>
    <button id='product-purchase-menu'>상품 구매</button>
    </nav>
		<main id='main-content'></main>
    `
	}
	initEventListener() {
		$('#nav-menu').addEventListener('click', ({ target }) => {
			if (target.tagName !== 'BUTTON') return
			this.renderTabContent(target.id)
		})
		$('#main-content').addEventListener('click', ({ target }) => {
			if (target.id !== 'product-add-button') return
			this.addProduct(target)
		})
	}

	renderTabContent(tabId) {
		let targetTabTemplate
		if (tabId === 'product-add-menu') targetTabTemplate = this.getProductAddTabTemplate()
		if (tabId === 'vending-machine-manage-menu') targetTabTemplate = this.getMachineManageTabTemplate()
		if (tabId === 'product-purchase-menu') targetTabTemplate = this.getProductPurchaseTabTemplate()

		$('#main-content').innerHTML = targetTabTemplate
	}

	getProductAddTabTemplate() {
		return `       
      <div>
        <h3>상품 추가하기</h3>        
        <input id='product-name-input' placeholder='상품명' type='text'></input>
        <input id='product-price-input' placeholder='가격' type='number'></input>
        <input id='product-quantity-input' placeholder='수량' type='number'></input>
        <button id='product-add-button'>추가하기</button>        
      </div>
      <div>
      <h3>상품 현황</h3>
        <table>
          <tr>
            <th>상품명</th>
            <th>가격</th>
            <th>수량</th>
          </tr>        
          ${this.productList
						.map(product => {
							return `
              <tr class='product-manage-item'>
                <td class='product-manage-name'>${product.name}</td>
                <td class='product-manage-price'>${product.price}</td>
                <td class='product-manage-quantity'>${product.quantity}</td>
              </tr>
              `
						})
						.join('')}                     
        </table>
      </div>       
    `
	}
	getMachineManageTabTemplate() {
		return `      
			<div>
				<h3>자판기 동전 충전하기</h3>        
				<input id='vending-machine-charge-input' placeholder='금액' type='number'></input>
				<button id='vending-machine-charge-button'>충전하기</button>        
				<h4 id='vending-machine-charge-amount'>보유금액: 0원</h4>
			</div>
			<div>
			<h3>동전 보유 현황</h3>
				<table>
					<tr>
						<th>동전</th>
						<th>개수</th>            
					</tr>						
					${this.coinList
						.map(coin => {
							return `
						<tr>
							<td>${coin.type}</td>
							<td id='vending-machine-coin-${coin.type}-quantity'>${coin.quantity}</td>
						</tr>
						`
						})
						.join('')}
				</table>
			</div>        
		`
	}
	getProductPurchaseTabTemplate() {
		return `     
      <div>
        <h3>금액 투입</h3>        
        <input id='charge-input' placeholder='금액' type='number'></input>
        <button id='charge-button'>투입하기</button>        
        <h4 id='charge-amount'>투입한 금액: 0원</h4>
      </div>
      <div>
        <h3>구매할 수 있는 상품 현황</h3>
        <table>
        <tr>
          <th>상품명</th>
          <th>가격</th>
          <th>수량</th>
          <th>구매</th>
        </tr>        
        ${this.productList
					.map(product => {
						return `
            <tr class='product-purchase-item'>
              <td class='product-purchase-name' data-product-name='${product.name}'>${product.name}</td>
              <td class='product-purchase-price' data-product-price='${product.price}'>${product.price}</td>
              <td class='product-purchase-quantity' data-product-quantity='${product.quantity}'>${product.quantity}</td>
              <td><button class='purchase-button'>구매하기</button></td>
            </tr>
            `
					})
					.join('')}                     
        </table>
      </div>
      <div>
        <h3>잔돈</h3>
        <button id='coin-return-button'>반환하기</button>
        <table>
          <tr>
            <th>동전</th>
            <th>개수</th>            
          </tr>						
          ${this.coinList
						.map(coin => {
							return `
            <tr>
              <td>${coin.type}</td>
              <td id='coin-${coin.type}-quantity'>${coin.quantity}</td>
            </tr>
            `
						})
						.join('')}
        </table>
      </div>      
    `
	}

	addProduct(target) {
		const [name, price, quantity] = [...target.parentElement.querySelectorAll('input')].map(input => input.value)
		this.productList.push({ name, price, quantity })
		this.renderTabContent('product-add-menu')
	}
}

new VendingMachine()
