export default function Reducer(
  state = {
    rooms: [
      {
        price: 70,
        location:
          "143A Tran Hung Dao, KP7, Duong Dong, Phu Quoc Island, Vietnam, 920000",
        describtion:
          "Our single rooms are bright and friendly. The bed is used for a restful sleep. The bathroom with shower and hairdryer is bright and modern. A free water bottle and a rich breakfast buffet are included in the price",
        distance: 2,
        typeRoom: "King room",
        timeOut: "",
        timein: "",
        buysdayes: [
         
          "2021-04-01",
          "2021-04-02",
          "2021-04-03",
          "2021-04-04",
          "2021-04-05",
          "2021-04-06",
          "2021-04-07",
          "2021-04-08",
        ],
        likes: 42,
        guest: 1,
        id: "19293949731",
        service: ["writing desk", "phone", "non-smoking-rom"],
        img:
          "https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=739&q=80",
      },
      {
        price: 60,
        location:
          "143A Tran Hung Dao, KP7, Duong Dong, Phu Quoc Island, Vietnam, 920000",
        describtion:
          "Our single rooms are bright and friendly. The bed is used for a restful sleep. The bathroom with shower and hairdryer is bright and modern. A free water bottle and a rich breakfast buffet are included in the price",
        distance: 2,
        typeRoom: "single room",
        timeOut: "",
        service: ["hotel-bar", "safe", "breakfast"],
        timein: "",
        likes: 18,
        id: "1929394959",
        guest: 1,
        img:
          "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80",
      },
      {
        price: 40,
        location:
          "143A Tran Hung Dao, KP7, Duong Dong, Phu Quoc Island, Vietnam, 920000",
        describtion:
          "Our single rooms are bright and friendly. The bed is used for a restful sleep. The bathroom with shower and hairdryer is bright and modern. A free water bottle and a rich breakfast buffet are included in the price",
        distance: 2,
        service: ["hotel-bar", "safe", "breakfast"],
        typeRoom: "double room",
        timeOut: "",
        timein: "",
        likes: 32,
        guest: 1,
        id: "1929394958",
        img:
          "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80",
      },
      {
        price: 40,
        location:
          "143A Tran Hung Dao, KP7, Duong Dong, Phu Quoc Island, Vietnam, 920000",
        describtion:
          "Our single rooms are bright and friendly. The bed is used for a restful sleep. The bathroom with shower and hairdryer is bright and modern. A free water bottle and a rich breakfast buffet are included in the price",
        distance: 2,
        typeRoom: "double room",
        timeOut: "",
        timein: "",
        likes: 37,
        service: ["hotel-bar", "safe", "breakfast"],
        guest: 1,
        id: "1929394957",
        img:
          "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80",
      },
      {
        price: 190,
        location:
          "143A Tran Hung Dao, KP7, Duong Dong, Phu Quoc Island, Vietnam, 920000",
        describtion:
          "Our single rooms are bright and friendly. The bed is used for a restful sleep. The bathroom with shower and hairdryer is bright and modern. A free water bottle and a rich breakfast buffet are included in the price",
        distance: 32,
        typeRoom: "classical room",
        timeOut: "",
        timein: "",
        buysdayes: [
         
          "2021-4-1",
          "2021-4-2",
          "2021-4-3",
          "2021-4-4",
          "2021-4-5",
          "2021-4-6",
          "2021-4-7",
          "2021-4-8",
        ],
        likes: 4,
        guest: 3,
        id: "1929394956",
        service: ["hotel-bar", "safe", "breakfast"],
        img:
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80",
      },
      {
        price: 160,
        location:
          "143A Tran Hung Dao, KP7, Duong Dong, Phu Quoc Island, Vietnam, 920000",
        describtion:
          "Our single rooms are bright and friendly. The bed is used for a restful sleep. The bathroom with shower and hairdryer is bright and modern. A free water bottle and a rich breakfast buffet are included in the price",
        distance: 2,
        typeRoom: "budget room",
        timeOut: "",
        timein: "",
        likes: 4,
        buysdayes: [
     
          "2021-4-8",
        ],
        guest: 3,
        id: "1929394955",
        service: ["hotel-bar", "safe", "breakfast"],
        img:
          "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80",
      },
      {
        price: 40,
        location:
          "143A Tran Hung Dao, KP7, Duong Dong, Phu Quoc Island, Vietnam, 920000",
        describtion:
          "Our single rooms are bright and friendly. The bed is used for a restful sleep. The bathroom with shower and hairdryer is bright and modern. A free water bottle and a rich breakfast buffet are included in the price",
        distance: 2,
        typeRoom: "Twin room",
        timeOut: "",
        timein: "",
        buysdayes: [
         
          "2021-4-4",
          "2021-4-5",
          "2021-4-6",
          "2021-4-7",
          "2021-4-8",
        ],
        service: ["hotel-bar", "safe", "breakfast"],
        likes: 8,
        guest: 2,
        id: "1929394954",
        img:
          "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80",
      },
      {
        price: 40,
        location:
          "143A Tran Hung Dao, KP7, Duong Dong, Phu Quoc Island, Vietnam, 920000",
        describtion:
          "Our single rooms are bright and friendly. The bed is used for a restful sleep. The bathroom with shower and hairdryer is bright and modern. A free water bottle and a rich breakfast buffet are included in the price",
        distance: 2,
        typeRoom: "double room",
        timeOut: "",
        timein: "",
        likes: 4,
        guest: 2,
        id: "1929394953",
        service: ["hotel-bar", "safe", "breakfast"],
        img:
          "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80",
      },
      {
        price: 90,
        location:
          "143A Tran Hung Dao, KP7, Duong Dong, Phu Quoc Island, Vietnam, 920000",
        describtion:
          "Our single rooms are bright and friendly. The bed is used for a restful sleep. The bathroom with shower and hairdryer is bright and modern. A free water bottle and a rich breakfast buffet are included in the price",
        distance: 32,
        typeRoom: "double room",
        timeOut: "",
        buysdayes: [
          "2021-3-27",
          "2021-3-29",
          "2021-3-30",
          "2021-4-1",
          "2021-4-2",
          "2021-4-3",
          "2021-4-4",
          "2021-4-5",
          "2021-4-6",
          "2021-4-7",
          "2021-4-8",
        ],
        timein: "",
        likes: 9,
        guest: 2,
        id: "1929394952",
        service: ["writing-desk", "phone", "non-smoking-room"],
        img:
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80",
      },
      {
        price: 60,
        location:
          "143A Tran Hung Dao, KP7, Duong Dong, Phu Quoc Island, Vietnam, 920000",
        describtion:
          "Our single rooms are bright and friendly. The bed is used for a restful sleep. The bathroom with shower and hairdryer is bright and modern. A free water bottle and a rich breakfast buffet are included in the price",
        distance: 2,
        typeRoom: "single room",
        timeOut: "",
        timein: "",
        likes: 18,
        id: "1929394959",
        guest: 1,
        service: ["writing-desk", "phone", "non-smoking-room"],
        img:
          "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80",
      },
      {
        price: 40,
        location:
          "143A Tran Hung Dao, KP7, Duong Dong, Phu Quoc Island, Vietnam, 920000",
        describtion:
          "Our single rooms are bright and friendly. The bed is used for a restful sleep. The bathroom with shower and hairdryer is bright and modern. A free water bottle and a rich breakfast buffet are included in the price",
        distance: 2,
        typeRoom: "double room",
        timeOut: "",
        timein: "",
        buysdayes: [
          "2021-3-27",
          "2021-3-28",
          "2021-3-29",
          "2021-3-30",
          "2021-4-1",
          "2021-4-2",
          "2021-4-3",
          "2021-4-4",
          "2021-4-5",
          "2021-4-6",
          "2021-4-7",
          "2021-4-8",
        ],
        likes: 32,
        guest: 1,
        id: "1929394958",
        service: ["writing-desk", "mini-bar", "non-smoking-room"],
        img:
          "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80",
      },
      {
        price: 40,
        location:
          "143A Tran Hung Dao, KP7, Duong Dong, Phu Quoc Island, Vietnam, 920000",
        describtion:
          "Our single rooms are bright and friendly. The bed is used for a restful sleep. The bathroom with shower and hairdryer is bright and modern. A free water bottle and a rich breakfast buffet are included in the price",
        distance: 2,
        typeRoom: "double room",
        timeOut: "",
        timein: "",
        likes: 37,
        service: ["writing desk", "mini-bar", "non-smoking-rom"],
        guest: 1,
        id: "1929394957",
        img:
          "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80",
      },
      {
        price: 190,
        location:
          "143A Tran Hung Dao, KP7, Duong Dong, Phu Quoc Island, Vietnam, 920000",
        describtion:
          "Our single rooms are bright and friendly. The bed is used for a restful sleep. The bathroom with shower and hairdryer is bright and modern. A free water bottle and a rich breakfast buffet are included in the price",
        distance: 32,
        typeRoom: "classical room",
        timeOut: "",
        timein: "",
        buysdayes: [
          "2021-3-27",
          "2021-3-28",
          "2021-3-29",
          "2021-3-30",
          "2021-4-1",
          "2021-4-2",
        
        ],
        likes: 4,
        guest: 3,
        service: ["writing desk", "mini-bar", "non-smoking-rom"],
        id: "1929394956",
        img:
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80",
      },
      {
        price: 160,
        location:
          "143A Tran Hung Dao, KP7, Duong Dong, Phu Quoc Island, Vietnam, 920000",
        describtion:
          "Our single rooms are bright and friendly. The bed is used for a restful sleep. The bathroom with shower and hairdryer is bright and modern. A free water bottle and a rich breakfast buffet are included in the price",
        distance: 2,
        typeRoom: "budget room",
        timeOut: "",
        timein: "",
        buysdayes: [
          
          "2021-4-3",
          "2021-4-4",
          "2021-4-5",
          "2021-4-6",
          "2021-4-7",
          "2021-4-8",
        ],
        likes: 4,
        guest: 3,
        service: ["wifi", "car-rental", "breakfast"],
        id: "1929394955",
        img:
          "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80",
      },
      {
        price: 40,
        location:
          "143A Tran Hung Dao, KP7, Duong Dong, Phu Quoc Island, Vietnam, 920000",
        describtion:
          "Our single rooms are bright and friendly. The bed is used for a restful sleep. The bathroom with shower and hairdryer is bright and modern. A free water bottle and a rich breakfast buffet are included in the price",
        distance: 2,
        typeRoom: "Twin room",
        timeOut: "",
        buysdayes: [
          "2021-3-27",
          "2021-3-28",
          "2021-3-29",
          "2021-3-30",
          "2021-4-7",
          "2021-4-8",
        ],
        timein: "",
        likes: 8,
        guest: 2,
        service: ["wifi", "car-rental", "breakfast"],
        id: "1929394954",
        img:
          "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80",
      },
      {
        price: 40,
        location:
          "143A Tran Hung Dao, KP7, Duong Dong, Phu Quoc Island, Vietnam, 920000",
        describtion:
          "Our single rooms are bright and friendly. The bed is used for a restful sleep. The bathroom with shower and hairdryer is bright and modern. A free water bottle and a rich breakfast buffet are included in the price",
        distance: 2,
        typeRoom: "double room",
        timeOut: "",
        timein: "",
        likes: 4,
        buysdayes: [
          "2021-3-27",
          "2021-3-28",
          "2021-3-29",
          "2021-3-30",
          "2021-4-1",
          "2021-4-2",

        ],
        guest: 2,
        id: "1929394953",
        service: ["wifi", "car-rental", "breakfast"],
        img:
          "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80",
      },
      {
        price: 90,
        location:
          "143A Tran Hung Dao, KP7, Duong Dong, Phu Quoc Island, Vietnam, 920000",
        describtion:
          "Our single rooms are bright and friendly. The bed is used for a restful sleep. The bathroom with shower and hairdryer is bright and modern. A free water bottle and a rich breakfast buffet are included in the price",
        distance: 32,
        typeRoom: "double room",
        timeOut: "",
        buysdayes: [
          "2021-4-5",
          "2021-4-6",
          "2021-4-7",
          "2021-4-8",
        ],
        timein: "",
        likes: 9,
        service: ["wifi", "car-rental", "breakfast"],
        guest: 2,
        id: "1929394952",
        img:
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80",
      },
    ],
  },
  action
) {
  switch (action.type) {
    case "LIKE_IT": {
      let arr = [];
      state.rooms.forEach((data, index) => {
        if (data.id === action.id) {
          data.likes = action.payload;
        }
        arr[index] = data;
      });

      return (state = {
        rooms: [...arr],
      });
    }

    default:
      return state;
  }
}