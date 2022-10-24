import TabProductAdd from './TabProductAdd.js'
import TabMachineManage from './TabMachineManage.js'
import TabProductPurchase from './TabProductPurchase.js'

class VendingMachine {
	constructor() {
		this.render()
		this.productAddTab = new TabProductAdd()
		this.machineManageTab = new TabMachineManage()
		this.productPurchaseTab = new TabProductPurchase()
		this.currentFocusedTab = 'productAddTab'
		this.initEventListener()
		this.renderTabContent()
	}

	render() {
		document.querySelector('#app').insertAdjacentHTML('afterbegin', this.getTemplate())
	}
	getTemplate() {
		return `        
    <h2>자판기 만들기🧃</h2>
    <nav id='nav-menu'>    
    <button data-tab-name='productAddTab' id='product-add-menu'>상품 관리</button>
    <button data-tab-name='machineManageTab' id='vending-machine-manage-menu'>잔돈 충전</button>
    <button data-tab-name='productPurchaseTab' id='product-purchase-menu'>상품 구매</button>
    </nav>
		<main id='main-content'></main>
    `
	}
	initEventListener() {
		document.querySelector('#nav-menu').addEventListener('click', ({ target }) => {
			if (target.tagName !== 'BUTTON') return
			const tabName = target.dataset.tabName
			this.updateFocusedTab(tabName)
			this.renderTabContent()
		})
	}
	updateFocusedTab(tabName) {
		this.currentFocusedTab = tabName
	}
	renderTabContent() {
		document.querySelector('#main-content').innerHTML = this[this.currentFocusedTab].getTemplate()
	}
}

new VendingMachine()
