import { defineStore } from 'pinia'
import { Cart, Product } from 'types'
interface State {
  carts: Cart[]
}
export const useCartStore = defineStore('cartStore', {
  state: () => ({
    carts: []
  } as State),
  actions: {
    addProduct (product: Product) {
      const item = this.carts.find(item => item.product.id === product.id)
      if (!item) {
        this.carts.push({ product, quantity: 1, total: product.price_promotional ? product.price_promotional * 1 : product.price * 1 })
      } else {
        item.quantity += 1
        item.total = item.total + (item.product.price_promotional ? item.product.price_promotional : item.product.price)
      }
    },
    reduceProduct (id: number) {
      const item = this.carts.find(item => item.product.id === id)
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1
          item.total = item.total - (item.product.price_promotional ? item.product.price_promotional : item.product.price)
        }
      }
    },
    removeProduct (id: number) {
      const item = this.carts.find(item => item.product.id === id)
      if (item) {
        this.carts.splice(this.carts.indexOf(item), 1)
      }
    }
  },
  getters: {
    totalPrice (): number {
      return this.carts.reduce((acc, item) => {
        return acc + item.total
      }, 0)
    },
    totatQuantity (): number {
      return this.carts.reduce((acc, item) => {
        return acc + item.quantity
      }, 0)
    }
  }
})
