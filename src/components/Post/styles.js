import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 20,
    borderRadius: 5,
    padding: 8,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  group: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scoreContainer: {
    flex: 1,
    flexDirection: 'column',
    marginRight: 8,
  },
  scoreButton: {

  },
  score: {
  
  },
  mainContainer: {
    flex: 4,
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
  },
  link: {
    fontSize: 12,
  },
  commentContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  commentCount: {
    fontSize: 14,
    top: -5,
  },
  commentIcon: {
    fontSize: 20,
  },
})

export default styles
