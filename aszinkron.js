class Aszinkron {
    constructor() {}
  
    adatBeolvas(vegpont, callbackFv) {
      fetch(vegpont, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          callbackFv(data);
        })
        .catch((error) => console.log(error));
    }
  
    adattorol(vegpont, id) {
      fetch(`${vegpont}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => console.log(error));
    }
  }
  
  export default Aszinkron;