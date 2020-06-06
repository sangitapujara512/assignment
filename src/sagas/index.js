import { all, fork, call, put } from 'redux-saga/effects';
import test from './watchers/testSaga'

function* root() {
    yield all([
        fork(test),
    ]);
}

export default root;