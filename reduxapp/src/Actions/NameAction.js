import myStore from "../ReduxStore/Store";

const nameAction = (name) => {
//  alert(name);
 myStore.dispatch({
     type: 'NAME',                      // this object is store in action
     payLoad:name
 })
}

export default nameAction