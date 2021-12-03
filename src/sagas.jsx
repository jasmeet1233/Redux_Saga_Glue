import axios from "axios";
import { put, takeEvery, all, call } from "redux-saga/effects";

export function* helloSaga() {
  console.log("Hello Sagas!");
}

const getData = async () => {
    const data = await axios.get("https://jsonplaceholder.typicode.com/posts");
    console.log(data);
    return data
}

function* callApi() {
  const users = yield call(getData);
  yield put({ type: "SUCCESS", payload: users.data });
}

function* watchCallApi() {
    yield takeEvery('CALL_API', callApi)
}

export default function* rootSaga() {
  yield all([helloSaga(), watchCallApi()]);
}
