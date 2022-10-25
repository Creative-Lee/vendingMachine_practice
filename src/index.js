import TabProductAdd from './TabProductAdd.js'
import TabMachineManage from './TabMachineManage.js'
import TabProductPurchase from './TabProductPurchase.js'
import { $ } from './utils/dom.js'

class VendingMachine {
	constructor() {
		this.productList = []
		this.productAddTab = new TabProductAdd(this.productList)
		this.machineManageTab = new TabMachineManage()
		this.productPurchaseTab = new TabProductPurchase()
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
		let targetTab
		if (tabId === 'product-add-menu') targetTab = this.productAddTab
		if (tabId === 'vending-machine-manage-menu') targetTab = this.machineManageTab
		if (tabId === 'product-purchase-menu') targetTab = this.productPurchaseTab

		$('#main-content').innerHTML = targetTab.getTemplate()
	}
	addProduct(target) {
		const [name, price, quantity] = [...target.parentElement.querySelectorAll('input')].map(input => input.value)
		this.productList.push({ name, price, quantity })
		this.renderTabContent('product-add-menu')
	}
}

new VendingMachine()
