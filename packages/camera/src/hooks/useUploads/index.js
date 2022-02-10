import { useReducer } from 'react';

import Actions from '../../actions';

function init(ids) {
  const state = {};
  const initialUploadState = { picture: null, status: 'idle', error: null, uploadCount: 0 };

  ids.forEach((id) => {
    state[id] = { id, ...initialUploadState };
  });

  return state;
}

function reducer(state, action) {
  if (action.type === Actions.uploads.RESET_UPLOADS) {
    return init(action.ids);
  }

  const { id } = action.payload;
  const prevUpload = state[id];

  if (!prevUpload) {
    throw new Error(`Missing ID in uploads state. Got ${action.payload.id}`);
  }

  let { uploadCount } = prevUpload;
  if (action.increment) {
    uploadCount = prevUpload.uploadCount + 1;
  }

  switch (action.type) {
    case Actions.uploads.UPDATE_UPLOAD:
      return ({
        ...state,
        [id]: { ...prevUpload, ...action.payload, uploadCount },
      });

    default:
      throw new Error();
  }
}

/**
 * @param ids
 * @return {{dispatch: ({}) => void, name: string, state: S}}
 */
export default function useUploads(ids) {
  const [state, dispatch] = useReducer(reducer, ids, init);
  return { state, dispatch, name: 'uploads' };
}
