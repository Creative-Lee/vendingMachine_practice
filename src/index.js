class VendingMachine {
	constructor() {
		this.render()
	}

	render() {
		document.querySelector('#app').insertAdjacentHTML('afterbegin', this.getTabTemplate())
	}
	getTabTemplate() {
		return `        
    <h2>자판기 만들기🧃</h2>
    <nav id='nav-menu'>    
    <button id='product-add-menu'>상품 관리</button>
    <button id='vending-machine-manage-menu'>잔돈 충전</button>
    <button id='product-purchase-menu'>상품 구매</button>
    </nav>
    `
	}
}

new VendingMachine()
