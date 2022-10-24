export default class TabMachineManage {
	constructor() {
		this.coinList = [
			{ type: 500, quantity: 0 },
			{ type: 100, quantity: 0 },
			{ type: 50, quantity: 0 },
			{ type: 10, quantity: 0 },
		]
	}

	getTemplate() {
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
}
