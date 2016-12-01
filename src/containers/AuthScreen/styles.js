import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'lightgrey',
  },
  top: {
    flex: 5,
  },
  card: {
    backgroundColor: 'white',
    flex: 6,
    flexDirection: 'column',
    marginRight: 8,
    marginLeft: 8,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 30,
    paddingTop: 80,
  },
  shadow: {
    shadowColor: 'black',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  input: {
    
  },
  inputText: {
    height: 35,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 4,
    fontSize: 18,
    textAlign: 'center',
  },
  divider: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: -30,
    marginRight: -30,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: 'grey',
  },
  submit: {
    backgroundColor: 'blue',
    marginTop: 20,
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
})

export default styles
