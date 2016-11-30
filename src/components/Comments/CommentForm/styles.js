import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  commentFormContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  shadow: {
    shadowColor: 'black',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  commentFormInput: {
    flex: 2,
    height: 40,
    borderRadius: 5,
    backgroundColor: 'white',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
  },
  commentFormSubmit: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    borderRadius: 5,
    marginLeft: 8,
    marginRight: 4,
  },
  commentFormSubmitText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
})

export default styles
