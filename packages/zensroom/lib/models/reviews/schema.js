const schema = {
  // default properties

  _id: {
    type: String,
    optional: true,
    viewableBy: ['guests'],
  },
  createdAt: {
    type: Date,
    optional: true,
    viewableBy: ['guests'],
    onInsert: (document, currentUser) => {
      return new Date();
    }
  },
  // userId: {
  //   type: String,
  //   optional: true,
  //   viewableBy: ['guests'],
  //   resolveAs: 'user: User', // resolve this field as "user" on the client
  // },


  comment: {
    label: 'Comment',
    type: String,
    optional: false,
    viewableBy: ['guest'],
    insertableBy: ['member'],
    editableBy: ['member'],
  },


};

export default schema;