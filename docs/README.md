## 자판기 기능 목록 🧃

---

### 1. 구현 전 전체적인 흐름 정리

- 공통 기능
  - `다른 탭 이동 시에도 기존 탭 상태 유지`
  - `localStorage 사용으로 새로고침시에도 최근 상태 유지`
<br>

- 상품 관리 탭
  - `상품 리스트 상태 값`
  - ``
<br>

- 잔돈 충전 탭

<br>

- 상품 구매 탭



---

### 2. DOM 선택자 정리

**탭 메뉴 버튼**

- `상품 구매`탭으로 이동하는 메뉴 버튼 id는 `product-purchase-menu`이다.
- `잔돈 충전`탭으로 이동하는 메뉴 버튼 id는 `vending-machine-manage-menu`이다.
- `상품 관리`탭으로 이동하는 메뉴 버튼 id는 `product-add-menu`이다.

**상품 관리(추가) 메뉴**

- 상품 추가 입력 폼의 상품명 입력 요소의 id는 `product-name-input`이다.
- 상품 추가 입력 폼의 상품 가격 입력 요소의 id는 `product-price-input`이다.
- 상품 추가 입력 폼의 수량 입력 요소의 id는 `product-quantity-input`이다.
- 상품 `추가하기` 버튼 요소의 id는 `product-add-button`이다.
- 추가한 각 상품 요소의 class명은 `product-manage-item`이며, 하위에 아래 요소들을 갖는다.
  - 상품명에 해당하는 요소의 class명은 `product-manage-name`이다.
  - 가격에 해당하는 요소의 class명은 `product-manage-price`이다.
  - 수량에 해당하는 요소의 class명은 `product-manage-quantity`이다.

**잔돈 충전 (자판기 보유 동전) 메뉴**

- 자판기가 보유할 금액을 충전할 요소의 id는 `vending-machine-charge-input`이다.
- `충전하기` 버튼에 해당하는 요소의 id는 `vending-machine-charge-button`이다.
- 충전된 금액을 확인하는 요소의 id는 `vending-machine-charge-amount` 이다.
- 보유한 각 동전의 개수에 해당하는 요소의 id는 다음과 같다.
    - 500원: `vending-machine-coin-500-quantity`
    - 100원: `vending-machine-coin-100-quantity`
    - 50원: `vending-machine-coin-50-quantity`
    - 10원: `vending-machine-coin-10-quantity`

**상품 구매 메뉴**

- 투입 금액 입력 요소의 id는 `charge-input`이다.
- 투입하기 버튼 요소의 id는 `charge-button`이다.
- 투입한 금액을 확인하는 요소의 id는 `charge-amount`이다.
- 반환하기 버튼 요소의 id는 `coin-return-button`이다.
- 반환된 각 동전의 개수에 해당하는 요소의 id는 다음과 같다.
  - 500원: `coin-500-quantity`
  - 100원: `coin-100-quantity`
  - 50원: `coin-50-quantity`
  - 10원: `coin-10-quantity`
- 각 상품 요소의 class명은 `product-purchase-item`이고, 하위에 아래 요소들을 갖는다.
  - 구매 버튼에 해당하는 요소의 class명은 `purchase-button`이다.
  - 상품명에 해당하는 요소의 class명은 `product-purchase-name`이다.
  - 가격에 해당하는 요소의 class명은 `product-purchase-price`이다.
  - 수량에 해당하는 요소의 class명은 `product-purchase-quantity`이다.
  - 상품명은 `dataset` 속성을 사용하고 `data-product-name` 형식으로 저장한다.
  - 가격은 `dataset` 속성을 사용하고 `data-product-price` 형식으로 저장한다.
  - 수량은 `dataset` 속성을 사용하고 `data-product-quantity` 형식으로 저장한다.



---

### 3. 주의할 점 및 요구사항

- index.html 직접 수정 금지
- 모든 예외 상황은 alert으로 처리 
- 잔돈 무작위 생성기능은 Random.pickNumberInList 사용할 것 
  ```javascript
  const randomNumber = Random.pickNumberInList([10, 50, 100, 500]);
  ```

---

### 4. 상세 기능 목록 (구현 과정에서 자세하게 업데이트)

### - VendingMachine Class

