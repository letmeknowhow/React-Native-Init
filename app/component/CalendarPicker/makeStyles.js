/**
 *  Class: CalendarPicker
 *  Author: Niu Xiaoyu
 *  Date: 16/9/11.
 *  Description: 日历
 */

function makeStyles(scaler) {
  return {
    calendar: {
      height: 390 * scaler,
      marginTop: 10 * scaler
    },
    dayWrapper: {
      width: 50 * scaler,
      height: 50 * scaler,
      backgroundColor: '#ffffff',
      margin: 1
    },

    dayButton: {
      width: 50 * scaler,
      height: 50 * scaler,
      alignSelf: 'center'
    },

    dayButtonSelected: {
      backgroundColor: '#5ce600',
    },

    dayLabel: {
      fontSize: 14 * scaler,
      color: '#000',
      marginTop: 6 * scaler,
      alignSelf: 'center'
    },

    dateCommentLabel: {
      fontSize: 12 * scaler,
      color: 'red',
      marginTop: 6 * scaler,
      alignSelf: 'flex-end'
    },

    dayLabelsWrapper: {
      flexDirection: 'row',
      marginBottom: 10 * scaler,
      borderBottomWidth: 1,
      borderTopWidth: 1,
      paddingTop: 10 * scaler,
      paddingBottom: 10 * scaler,
      alignSelf: 'center',
      backgroundColor: 'rgba(0,0,0,0.0)',
      borderColor: 'rgba(0,0,0,0.2)'
    },

    daysWrapper: {
      alignSelf: 'center'
    },

    dayLabels: {
      width: 50 * scaler,
      fontSize: 10 * scaler,
      color: '#000',
      textAlign: 'center'
    },

    selectedDay: {
      width: 60 * scaler,
      height: 60 * scaler,
      backgroundColor: '#5ce600',
      borderRadius: 30 * scaler,
      alignSelf: 'center'
    },

    monthLabel: {
      fontSize: 16 * scaler,
      color: '#000',
      width: 180 * scaler,
      textAlign: 'center'
    },

    headerWrapper: {
      alignItems: 'center',
      flexDirection: 'row',
      alignSelf: 'center',
      marginBottom: 10 * scaler,
      padding: 5 * scaler,
      paddingBottom: 3 * scaler,
      backgroundColor: 'rgba(0,0,0,0.0)'
    },

    monthSelector: {
      width: 80 * scaler
    },

    prev: {
      textAlign: 'left',
      fontSize: 14 * scaler
    },

    next: {
      textAlign: 'right',
      fontSize: 14 * scaler
    },

    yearLabel: {
      fontSize: 14 * scaler,
      fontWeight: 'bold',
      color: '#000',
      textAlign: 'center'
    },

    weeks: {
      flexDirection: 'column'
    },

    weekRow: {
      flexDirection: 'row'
    },

    disabledTextColor: {
      color: '#BBBBBB'
    }
  };
}


module.exports = makeStyles;