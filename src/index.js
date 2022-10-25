import TabProductAdd from './TabProductAdd.js'
import TabMachineManage from './TabMachineManage.js'
import TabProductPurchase from './TabProductPurchase.js'

class VendingMachine {
	constructor() {
		this.render()
		this.initEventListener()
		this.productAddTab = new TabProductAdd()
		this.machineManageTab = new TabMachineManage()
		this.productPurchaseTab = new TabProductPurchase()
		this.renderTabContent('product-add-menu')
	}

	render() {
		document.querySelector('#app').insertAdjacentHTML('afterbegin', this.getTemplate())
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
		document.querySelector('#nav-menu').addEventListener('click', ({ target }) => {
			if (target.tagName !== 'BUTTON') return
			const tabId = target.id
			this.renderTabContent(tabId)
		})
	}

	renderTabContent(tabId) {
		let targetTab
		if (tabId === 'product-add-menu') targetTab = this.productAddTab
		if (tabId === 'vending-machine-manage-menu') targetTab = this.machineManageTab
		if (tabId === 'product-purchase-menu') targetTab = this.productPurchaseTab

		document.querySelector('#main-content').innerHTML = targetTab.getTemplate()
	}
}

new VendingMachine()
