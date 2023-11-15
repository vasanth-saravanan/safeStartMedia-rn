import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const COLORS = {
  //base colors
  primary: '#0a265e',

  //special
  baseBgColor: '#f2f2f2',

  //grey family
  grey_1: '#828282',
  grey_2: '#dbdbdb',
  grey_3: '#f9f9f9',
  grey_4: '#EDEDED',

  //black family
  black_1: '#000000',
  black_2: '#5E5E5E',

  //white family
  white_1: '#ffffff',

  //blue family
  blue_1: '#3f51c1',

  //red family
  red_1: '#bb4a30',

  //sandle family
  sandle_1: '#FEF6E7',
  sandle_2: '#976D1F',

  //green family
  green_1: '#D8FFDC',
  green_2: '#4BA053',
};

//======================================//
const FONTS = {
  //ASICS fonts
  AsicsRegular: 'ASICSFont3.0-Regular',
  AsicsItalic: 'ASICSFont3.0-Italic',
  AsicsBold: 'ASICSFont3.0-Bold',
  AsicsBoldItalic: 'ASICSFont3.0-BoldItalic',
};
//======================================//
const BASESTYLES = StyleSheet.create({
  //containers
  baseContainer: {
    flex: 1,
    backgroundColor: COLORS.white_1,
  },
  bodyContainer: {
    flex: 1,
    padding: hp(1),
    backgroundColor: COLORS.white_1,
    paddingHorizontal: wp(5),
  },
  baseHorizontalSpace: {
    flex: 1,
    paddingHorizontal: wp(5),
  },

  //font style
  fontAsicsRegular: (fontSize = 14, fontColor = COLORS.black_1) => ({
    fontFamily: FONTS.AsicsRegular,
    fontSize: fontSize,
    color: fontColor,
  }),
  fontAsicsItalic: (fontSize = 14, fontColor = COLORS.black_1) => ({
    fontFamily: FONTS.AsicsItalic,
    fontSize: fontSize,
    color: fontColor,
  }),
  fontAsicsBold: (fontSize = 14, fontColor = COLORS.black_1) => ({
    fontFamily: FONTS.AsicsBold,
    fontSize: fontSize,
    color: fontColor,
  }),
  fontAsicsBoldItalic: (fontSize = 14, fontColor = COLORS.black_1) => ({
    fontFamily: FONTS.AsicsBoldItalic,
    fontSize: fontSize,
    color: fontColor,
  }),

  //top,bottom,left,right
  top: (value = 1) => ({
    top: hp(value),
  }),
  bottom: (value = 1) => ({
    bottom: hp(value),
  }),
  left: (value = 1) => ({
    left: hp(value),
  }),
  right: (value = 1) => ({
    right: hp(value),
  }),
  positionAbsolute: {
    position: 'absolute',
  },

  //spacer
  spacer: (value = 1) => ({
    marginTop: hp(value),
  }),

  //width, height
  maxWidth: (value = 1) => ({
    maxWidth: wp(value),
  }),
  maxHeight: (value = 1) => ({
    maxHeight: hp(value),
  }),

  //width, height
  width: (value = 1) => ({
    width: wp(value),
  }),
  height: (value = 1) => ({
    height: hp(value),
  }),
  widthHeightPer: (value = '100%') => ({
    width: value,
  }),

  //margin
  margin: (value = 1) => ({
    margin: hp(value),
  }),
  marginTop: (value = 1) => ({
    marginTop: hp(value),
  }),
  marginBottom: (value = 1) => ({
    marginBottom: hp(value),
  }),
  marginLeft: (value = 1) => ({
    marginLeft: hp(value),
  }),
  marginRight: (value = 1) => ({
    marginRight: hp(value),
  }),
  marginHorizontal: (value = 1) => ({
    marginHorizontal: hp(value),
  }),
  marginVertical: (value = 1) => ({
    marginVertical: hp(value),
  }),

  //padding
  padding: (value = 1) => ({
    padding: hp(value),
  }),
  paddingTop: (value = 1) => ({
    paddingTop: hp(value),
  }),
  paddingBottom: (value = 1) => ({
    paddingBottom: hp(value),
  }),
  paddingLeft: (value = 1) => ({
    paddingLeft: hp(value),
  }),
  paddingRight: (value = 1) => ({
    paddingRight: hp(value),
  }),
  paddingHorizontal: (value = 1) => ({
    paddingHorizontal: hp(value),
  }),
  paddingVertical: (value = 1) => ({
    paddingVertical: hp(value),
  }),

  //flex
  flex: (value = 1) => ({
    flex: value,
  }),
  flexDirection: (value = 'row') => ({
    flexDirection: value,
  }),
  flexWrap: (value = 'wrap') => ({
    flexWrap: value,
  }),

  //alignments
  alignSelfFS: {
    alignSelf: 'flex-start',
  },
  alignSelfCenter: {
    alignSelf: 'center',
  },
  alignSelfFE: {
    alignSelf: 'flex-end',
  },
  alignSelfStetch: {
    alignSelf: 'stretch',
  },

  alignItemsFS: {
    alignItems: 'flex-start',
  },
  alignItemsCenter: {
    alignItems: 'center',
  },
  alignItemsFE: {
    alignItems: 'flex-end',
  },

  justifyContentFS: {
    justifyContent: 'flex-start',
  },
  justifyContentCenter: {
    justifyContent: 'center',
  },
  justifyContentFE: {
    justifyContent: 'flex-end',
  },
  justifyContentSA: {
    justifyContent: 'space-around',
  },
  justifyContentSB: {
    justifyContent: 'space-between',
  },
  justifyContentSE: {
    justifyContent: 'space-evenly',
  },

  textAlignCenter: {
    textAlign: 'center',
  },
  textAlignLeft: {
    textAlign: 'left',
  },
  textAlignRight: {
    textAlign: 'right',
  },
  textAlignJustify: {
    textAlign: 'justify',
  },
  lineHeight: (value = 22) => ({
    lineHeight: value,
  }),
  fontWeight: (value = '200') => ({
    fontWeight: value,
  }),

  //strikeout
  textStrikeOut: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },

  //textUnderline
  textUnderline: {
    textDecorationLine: 'underline',
  },

  //border style
  borderRadius: (value = 1) => ({
    borderRadius: hp(value) / 2,
  }),
  borderTopLeftRadius: (value = 1) => ({
    borderTopLeftRadius: hp(value) / 2,
  }),
  borderTopRightRadius: (value = 1) => ({
    borderTopRightRadius: hp(value) / 2,
  }),
  borderWidth: (value = 1) => ({
    borderWidth: value,
  }),
  borderColor: (value = COLORS.primary) => ({
    borderColor: value,
  }),

  //custom shadow
  shadow_hide: {
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },

  shadow_header: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.02,
    shadowRadius: 0.1,

    elevation: 2,
  },
  shadowLight: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  shadow_0: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 1,
  },
  shadow_1: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  shadow_2: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },

  shadow_3: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  shadow_4: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },

  //bgColor
  bgColor: (value = COLORS.white_1) => ({
    backgroundColor: value,
  }),
});
//======================================//

export {COLORS, FONTS, BASESTYLES};
