import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
    padding: 8,
  },
  brand: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 26,
  },
  logo: {
    marginRight: 12,
    width: 35,
    height: 35,
    backgroundColor: 'orange',
    borderRadius: 5,
  },
  auth: {
    alignSelf: 'center',
    marginRight: 10,
  },
})

export default styles
