import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

//constants
import {ScreenName} from '../../routes/screenName';
import {API_END_POINTS} from '../../apiService/apiEndPoints';
import APIKit from '../../apiService/index';

//Api calls
export const getPhotoList = createAsyncThunk('getPhotoList', async data => {
  const response = await APIKit().get(
    `${API_END_POINTS.getPhotoList}?page=1&size=10`,
  );
  if (response?.status == 200) {
    data?.callBack(response?.data);
  } else {
    console.log(`getPhotoList => ${response}`);
  }
});

//slice
const commonSlice = createSlice({
  name: 'common',
  initialState: {
    loader: false,
    initialRouteName: ScreenName.signin,
    userDetails: {},
  },
  reducers: {
    //actions
    updateInitialRouteName: (state, action) => {
      state.initialRouteName = action.payload;
    },
    updateUserDetails: (state, action) => {
      state.userDetails = action.payload;
    },
  },
  extraReducers: builder => {
    //get photo list
    builder.addCase(getPhotoList.pending, (state, action) => {
      state.loader = true;
    });
    builder.addCase(getPhotoList.fulfilled, (state, action) => {
      state.loader = false;
    });
    builder.addCase(getPhotoList.rejected, (state, action) => {
      state.loader = false;
    });
  },
});

export const {updateInitialRouteName, updateUserDetails} = commonSlice.actions;
export default commonSlice.reducer;
