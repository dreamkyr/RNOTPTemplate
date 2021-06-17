import { isIOS } from '../utils';

const fontStyles = {
  Poppins_300_Light: {
    fontFamily: isIOS ? 'Poppins' : 'Poppins-Light',
    fontWeight: '300',
  },
  Poppins_400_Regular: {
    fontFamily: isIOS ? 'Poppins' : 'Poppins-Regular',
    fontWeight: '400',
  },
  Poppins_500_Medium: {
    fontFamily: isIOS ? 'Poppins' : 'Poppins-Medium',
    fontWeight: '500',
  },
  Ogg_600_Bold: {
    fontFamily: isIOS ? 'Ogg' : 'Ogg-Bold',
    fontWeight: '600',
  },
  Optima_400_Regular: {
    fontFamily: isIOS ? 'Optima' : 'Optima-Regular',
    fontWeight: '400',
  },
  Optima_600_SemiBold: {
    fontFamily: isIOS ? 'Optima' : 'Optima-Bold',
    fontWeight: '600',
  },
  OggText_500_Medium: {
    fontFamily: isIOS ? 'Ogg Text' : 'OggText-Medium_veB6Za0',
    fontWeight: '500',
  },
  OggText_350_Book: {
    fontFamily: isIOS ? 'Ogg Text' : 'OggText-Book_Nw91qja',
    fontWeight: '400',
  },
  Karla_400_Regular: {
    fontFamily: isIOS ? 'Karla' : 'Karla-Regular',
    fontWeight: '400',
  },
};

export default fontStyles;
