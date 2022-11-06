import {
  BASE_URL, SET_FOOD,
  SET_FOOD_DETAIL
} from "../actionTypes/actionTypes";

export function setFood(data) {
  return {
    type: SET_FOOD,
    payload: data,
  };
}
export function setFoodDetail(data) {
  return {
    type: SET_FOOD_DETAIL,
    payload: data,
  };
}

export function fetchFood() {
  return async (dispatch) => {
    try {
      const response = await fetch(BASE_URL + `/resto/food`, {
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
      if (!response.ok) {
        throw response.message;
      }

      const data = await response.json();

      dispatch(setFood(data));
    } catch (error) {
      console.log(error);
    }
  };
}
export function foodDetailById(id) {
  return async (dispatch) => {
    try {
      let response = await fetch(BASE_URL + `/resto/food/${id}`, {
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
      if (!response.ok) {
        throw response.message;
      }
      const data = await response.json();
      dispatch(setFoodDetail(data));
    } catch (error) {
      console.log(error)
    } 
  };
}
export function createFood(food) {
  return async (dispatch) => {
    try {
      let response = await fetch(BASE_URL + `/resto/food`, {
        method: "POST",
        body: JSON.stringify(food),
        headers: {
          access_token: localStorage.getItem("access_token"),
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw response.message;
      }
      // successSwal("New food is created successfully");
      dispatch(fetchFood());
    } catch (error) {
      console.log(error);
    }
  };
}
// export function deleteFood(id) {
//   return (dispatch) => {
//     try {
//       confirmSwal().then(async (result) => {
//         if (result.isConfirmed) {
//           let response = await fetch(BASE_URL + `resto/food/${id}`, {
//             method: "DELETE",
//             headers: { access_token: localStorage.getItem("access_token") },
//           });
//           if (!response.ok) {
//             throw response.message;
//           }
//           // Swal.fire("Deleted!", "Food is deleted successfully", "success");
//           dispatch(fetchFood());
//         }
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// }
export function updateFood(food, id) {
  return async (dispatch) => {
    try {
      let response = await fetch(BASE_URL + `/resto/food/${id}`, {
        method: "PUT",
        headers: {
          access_token: localStorage.getItem("access_token"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify(food),
      });
      if (!response.ok) {
        throw response.message;
      }
      // successSwal("Food is updated successfully");
      dispatch(fetchFood());
    } catch (error) {
      console.log(error);
    }
  };
}
export function updateStatusFood(food, id) {
  return async (dispatch) => {
    try {
      let response = await fetch(BASE_URL + `resto/food-status/${id}`, {
        method: "PATCH",
        headers: {
          access_token: localStorage.getItem("access_token"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify(food),
      });
      if (!response.ok) {
        throw response.message;
      }
      // successSwal("Food is updated successfully");
      dispatch(fetchFood());
    } catch (error) {
      console.log(error);
    }
  };
}
export function updateActiveFood(food, id) {
  return async (dispatch) => {
    try {
      let response = await fetch(BASE_URL + `resto/food-active/${id}`, {
        method: "PATCH",
        headers: {
          access_token: localStorage.getItem("access_token"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify(food),
      });
      if (!response.ok) {
        throw response.message;
      }
      // successSwal("Food is updated successfully");
      dispatch(fetchFood());
    } catch (error) {
      console.log(error);
    }
  };
}