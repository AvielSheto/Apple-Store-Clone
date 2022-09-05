function reducer(
  state = {
    products: [
      { id: "345", name: "iphone 13", price: 1000, quantity: 1, img:"https://www.powerplanetonline.com/cdnassets/iphone_13_pro_max_verde_alpino_01_l.jpg" },
      { id: "574", name: "macBook air", price: 2000, quantity: 1, img:"https://www.apple.com/v/macbook-air/o/images/overview/hero_mba_m1__mfge6fbp7t2m_small.jpg" },
      { id: "654", name: "apple watch", price: 800, quantity: 1, img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-card-40-hermes-202203?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1645382414043" },
      { id: "754", name: "Air Pods", price: 600, quantity: 1, img:"https://img.wisebuy.co.il/data/pics/Article/e-headphone/MWP22_AV2132167617576184434132482656796281838132527653696856380.jpg" },
      { id: "823", name: "ipad", price: 1200, quantity: 1, img:"https://bstore.bezeq.co.il/media/26860/740-gray.jpg" }
    ],
    customers: [
      { id: "3288", first: "Aviel", last: "Sheto", city: "Ashdod" },
      { id: "4932", first: "Roni", last: "Bensimon", city: "Ashdod" },
    ],
    purchases: [
      {
        id: "1",
        customerId: "3288",
        productId: "345",
        date: "2022-08-29",
      },
      {
        id: "2",
        customerId: "3288",
        productId: "574",
        date: "Aug 26 2022 13:10:05 GMT+0300",
      },
      {
        id: "3",
        customerId: "4932",
        productId: "574",
        date: "Aug 27 2022 13:10:05 GMT+0300",
      },
      {
        id: "4",
        customerId: "4932",
        productId: "654",
        date: "Aug 27 2022 13:10:05 GMT+0300",
      },
      {
        id: "5",
        customerId: "3288",
        productId: "754",
        date: "Aug 27 2022 13:10:05 GMT+0300",
      },
      {
        id: "6",
        customerId: "3288",
        productId: "823",
        date: "Aug 27 2022 13:10:05 GMT+0300",
      },
    ],
  },
  action
) {
  switch (action.type) {
    // edit products
    case "UPDATEPRODUCT":
      const id = action.payload.id;
      const arr = [...state.products];
      const index = arr.findIndex((product) => product.id === id);
      if (index >= 0) {
        arr[index] = action.payload;
      }
      return { ...state, products: arr };

    case "DELETEPRODUCT":
      const idTwo = action.payload;
      const arrTwo = [...state.products];
      const indexTwo = arrTwo.findIndex((product) => product.id === idTwo);
      if (indexTwo >= 0) {
        arrTwo.splice(indexTwo, 1);
      }
      console.log(arrTwo);

      // delete in the purchased
      const arrThree = [...state.purchases];
      const FilteredArrThree = arrThree.filter(
        (arrThree) => arrThree.productId !== idTwo
      );
      return { ...state, products:arrTwo, purchases: FilteredArrThree };

    // edit customer

    case "UPDATECUSTOMER":
      const idFour = action.payload.id;
      const arrFour = [...state.customers];
      const indexFour = arrFour.findIndex(
        (Customers) => Customers.id === idFour
      );
      if (indexFour >= 0) {
        arrFour[indexFour] = action.payload;
      }
      // update in Purchases

      return { ...state, customers: arrFour };

    case "DELETECUSTOMER":
      const idFive = action.payload;
      const arrFive = [...state.customers];
      const indexFive = arrFive.findIndex(
        (Customers) => Customers.id === idFive
      );
      if (indexFive >= 0) {
        arrFive.splice(indexFive, 1);
      }
      // delete in purchased
      const arrSix = [...state.purchases];
      const filterArrSix = arrSix.filter((arrSix) => arrSix.customerId !== idFive);
      console.log(filterArrSix);
      return { ...state, customers: arrFive, purchases: filterArrSix };

    case "ADDPURCHASES":
      return { ...state, purchases: [...state.purchases, action.payload] };

    default:
      return state;
  }
}

export default reducer;
