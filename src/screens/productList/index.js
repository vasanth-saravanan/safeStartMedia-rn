import React, {useState, useEffect} from 'react';
import {View, Image, FlatList, ActivityIndicator} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

//redux
import {useDispatch} from 'react-redux';
import {getCommonStates} from '../../redux/selectors';
import {getPhotoList} from '../../redux/slices/commonSlice';

//styles and themes
import styles from './styles';
import {BASESTYLES, COLORS} from '../../themes';

//custom components
import CustomSafeArea from '../../components/customSafeArea';

import NoRecords from '../../components/noRecords';

const ProductList = props => {
  const dispatch = useDispatch();
  const {loader} = getCommonStates();

  const initialState = {
    totalPages: 0,
    page: 1,
    fetchingStatus: false,
    data: [],
  };
  const [localStates, setLocalStates] = useState(initialState);
  const handleLocalStates = (stateName, value) => {
    setLocalStates(prevState => ({...prevState, [stateName]: value}));
  };

  useEffect(() => {
    getPhtoListRequest();
  }, []);

  const getPhtoListRequest = () => {
    dispatch(
      getPhotoList({
        callBack: getPhtoListRequetCB,
      }),
    );
  };

  const getPhtoListRequetCB = data => {
    handleLocalStates('data', data);
  };

  const handleMore = () => {
    if (
      localStates?.page < localStates?.totalPages &&
      !localStates?.fetchingStatus
    ) {
      handleLocalStates('fetchingStatus', true);
      handleLocalStates('page', localStates?.page + 1);
      //call api
    }
  };

  return (
    <>
      <CustomSafeArea backgroundColor={COLORS.white_1}>
        {loader ? (
          <View
            style={[
              BASESTYLES.flex(),
              BASESTYLES.alignItemsCenter,
              BASESTYLES.justifyContentCenter,
            ]}>
            <ActivityIndicator size="small" color="#0000ff" />
          </View>
        ) : (
          <KeyboardAwareScrollView
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled">
            <View style={styles.flatlistView}>
              <FlatList
                bounces={false}
                data={localStates?.data}
                keyExtractor={(item, index) => index}
                renderItem={({item, index}) => {
                  return (
                    <View>
                      <Image
                        source={{uri: item?.url}}
                        style={[
                          BASESTYLES.height(50),
                          BASESTYLES.width(90),
                          BASESTYLES.alignSelfCenter,
                          BASESTYLES.marginBottom(2),
                        ]}
                      />
                    </View>
                  );
                }}
                ListEmptyComponent={() => {
                  return (
                    <View style={BASESTYLES.marginVertical(2)}>
                      {!localStates.fetchingStatus && (
                        <NoRecords errorMessage="No data" />
                      )}
                    </View>
                  );
                }}
                onEndReached={handleMore}
                onEndReachedThreshold={0.1}
              />
            </View>
          </KeyboardAwareScrollView>
        )}
      </CustomSafeArea>
    </>
  );
};

export default ProductList;
