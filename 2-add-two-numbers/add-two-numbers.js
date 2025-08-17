/* Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode(0); // Node dummy untuk memudahkan
    let current = dummy;
    let carry = 0;
    // Traverse kedua linked list sampai keduanya habis
    while (l1 !== null || l2 !== null || carry !== 0) {
        // Ambil nilai dari setiap node, atau 0 jika null
        let val1 = l1 ? l1.val : 0;
        let val2 = l2 ? l2.val : 0;
        // Hitung jumlah + carry dari digit sebelumnya
        let sum = val1 + val2 + carry;
        // Carry untuk digit berikutnya
        carry = Math.floor(sum / 10);
        // Digit untuk node saat ini
        let digit = sum % 10;
        // Buat node baru dengan digit hasil
        current.next = new ListNode(digit);
        current = current.next;
        // Pindah ke node berikutnya (jika ada)
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }
    // Return hasil, skip dummy node
    return dummy.next;
};
// Contoh penggunaan dan testing
function createLinkedList(arr) {
    let dummy = new ListNode(0);
    let current = dummy;
    for (let num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }
    return dummy.next;
}
function printLinkedList(head) {
    let result = [];
    let current = head;
    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }
    return result;
}