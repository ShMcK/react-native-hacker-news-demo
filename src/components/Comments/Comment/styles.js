import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  comment: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 10,
    left: -15,
  },
  avatarContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: 'darkgray',
  },
  contentContainer: {
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
  },
  contentAuthor: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  contentText: {
    fontSize: 16,
  },
})

export default styles
