export default class TapProductAdd {
	constructor() {
		this.productList = []
		this.render()
	}

	render() {
		document.querySelector('#app').insertAdjacentHTML('beforeend', this.getTemplate())
	}

	getTemplate() {
		return `
    <main id='main-content'>   
      <div>
        <h3>상품 추가하기</h3>
        <form>
          <input id='product-name-input' placeholder='상품명' type='text'></input>
          <input id='product-price-input' placeholder='가격' type='number'></input>
          <input id='product-quantity-input' placeholder='수량' type='number'></input>
          <button id='product-add-button'>추가하기</button>
        </form>
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
    </main>     
    `
	}
}
