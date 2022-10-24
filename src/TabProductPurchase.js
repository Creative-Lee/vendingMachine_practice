export default class TabProductPurchase {
	constructor() {
		this.productList = [{ name: '더미', price: 1000, quantity: 10 }]
		this.coinList = [
			{ type: 500, quantity: 0 },
			{ type: 100, quantity: 0 },
			{ type: 50, quantity: 0 },
			{ type: 10, quantity: 0 },
		]
		this.render()
	}

	render() {
		document.querySelector('#app').insertAdjacentHTML('beforeend', this.getTemplate())
	}

	getTemplate() {
		return `
    <main id='main-content'>   
      <div>
        <h3>금액 투입</h3>        
        <input id='charge-input' placeholder='금액' type='number'></input>
        <button id='charge-button'>투입하기</button>        
        <span id='charge-amount'>투입한 금액: 0원</span>
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
    </main>     
    `
	}
}
