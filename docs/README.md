## 자판기 기능 목록 🧃

---

### 1. 구현 전 전체적인 흐름 정리

- 공통 기능
  - `탭 이동시 각 탭에 맞는 데이터 읽어와서 랜더하기`
  - `localStorage 사용하기`
  - `모든 요소 동적으로 생성해야함`
<br>

- 상품 관리 탭
  - `상품 / 가격 / 수량 인풋, 추가 버튼 필요`
  - `상품 현황 테이블 필요`
  - `상품 상태 필요`
  - `최초 상품 상태 x`
  - `상품 최소 100원 시작, 10원 단위`
<br>

- 잔돈 충전 탭
  - `잔돈 인풋, 충전 버튼 필요`
  - `동전 보유 현황 테이블 필요`
  - `각 동전 상태 필요`
  - `최초 각 동전 보유 상태 0`
<br>

- 상품 구매 탭
  - `투입 금액 인풋, 투입 버튼 필요`
  - `구매 가능 상품 현황 테이블 필요`
    - `상품 현황 테이블 내 구매 버튼 필요`
  - `잔돈 반환 버튼 필요`
  - `잔돈 테이블 필요`
  - `최초 충전 금액 상태 0`
  - `최초 각 반환 동전 상태 0`
  - `투입 금액 10원 단위`
  - `품절 상품 구매 불가능 상태`
  <br>
  - `잔돈 반환 규칙`
    - `보유한 동전 중 최소 갯수로 반환`
    - `잔돈 반환 불가능 시 반환 가능한 금액만 반환` 

---

### 2. DOM 선택자 정리

**탭 메뉴 버튼**

- `상품 구매`탭 버튼 id는 `product-purchase-menu`
- `잔돈 충전`탭 버튼 id는 `vending-machine-manage-menu`
- `상품 관리`탭 버튼 id는 `product-add-menu`

**상품 관리(추가) 메뉴**

- 상품명 인풋 id는 `product-name-input`
- 상품 가격 인풋 id는 `product-price-input`
- 수량 인풋 id는 `product-quantity-input`
- 상품 `추가하기` 버튼 id는 `product-add-button`
- 추가한 각 상품 요소 class명은 `product-manage-item`
  - 상품명 class명은 `product-manage-name`
  - 가격 class명은 `product-manage-price`
  - 수량 class명은 `product-manage-quantity`

**잔돈 충전 (자판기 보유 동전) 메뉴**

- 충전 금액 인풋 id는 `vending-machine-charge-input`
- `충전하기` 버튼 id는 `vending-machine-charge-button`
- 자판기 보유금 요소 id는 `vending-machine-charge-amount` 
- 보유 동전의 개수 요소 id
    - 500원: `vending-machine-coin-500-quantity`
    - 100원: `vending-machine-coin-100-quantity`
    - 50원: `vending-machine-coin-50-quantity`
    - 10원: `vending-machine-coin-10-quantity`

**상품 구매 메뉴**

- 투입 금액 인풋 id는 `charge-input`
- 투입 버튼 id는 `charge-button`
- 투입금 요소 id는 `charge-amount`
- 반환 버튼 id는 `coin-return-button`
- 반환 동전 개수 요소 id
  - 500원: `coin-500-quantity`
  - 100원: `coin-100-quantity`
  - 50원: `coin-50-quantity`
  - 10원: `coin-10-quantity`
  <br>

- 각 상품 요소 class명 `product-purchase-item`
  - 구매 버튼 class명 `purchase-button`
  - 상품명 요소 class명 `product-purchase-name`
  - 가격 요소 class명 `product-purchase-price`
  - 수량 요소 class명 `product-purchase-quantity`
  - 상품명, 가격, 수량 `dataset`사용
    - 상품명 `data-product-name`
    - 가격 `data-product-price`
    - 수량 `data-product-quantity`



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

#### - 초기 설계 기록
  - `각 탭 클릭 시 해당 카테고리 화면 render`
  - `각 탭에서 이벤트 발생시 상태 반영해서 화면 re-render`
  - `각 탭에서 개별 상태관리`

<br>

#### 0. 공통 구현
  - navbar 구현  
    - `navbar template 구현`

#### 1. 상품 관리 탭
  
  - 