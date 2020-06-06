import { all, fork, call, put } from 'redux-saga/effects';

import workerGetRegistrationSaga from './';

function* root() {
    yield all([        
        fork(workerGetRegistrationSaga),
    ]);
}

export default root;