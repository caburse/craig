const ContactData = {
  issues: [{
    id: 1,
    topic: "Orders",
    faqs: [
      {id: "1.1", reason: "Place Order"},
      {id: "1.2", reason: "Change Order"},
      {id: "1.3", reason: "Cancel Order"},
      {id: "1.4", reason: "Shipping Status"}
    ]
  }, {
    id: 2,
    topic: "Returns",
    faqs: [
      {id: "2.1", reason: "Damaged"},
      {id: "2.2", reason: "Incorrect Item"},
      {id: "2.3", reason: "Incorrect Quantity"},
      {id: "2.4", reason: "Return Status"}
    ]
  }, {
    id: 3,
    topic: "Shopping on suckafree.com",
    faqs: [
      {id: "3.1", reason: "Can't Login"},
      {id: "3.2", reason: "Account issues"},
      {id: "3.3", reason: "Price issues"},
      {id: "3.4", reason: "Site issues"}
    ]
  }],

  topics: function() { return this.issues },
  get: function( id ) {
    const isTopic = t => t.topic === id
    return this.issues.find( isTopic )
  }
}
export default ContactData;