// commonStyles.js
import { StyleSheet } from 'react-native';

export const formBtnStyles = StyleSheet.create({
  cancelButton: {
    flex: 0.48,
    height: 50,
    backgroundColor: '#df5e5b',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  cancelButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  clearButton: {
    flex: 0.48,
    height: 50,
    backgroundColor: '#e5c750',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  clearButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  submitButton: {
    height: 50,
    backgroundColor: '#28a745',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export const headerStyles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#4CAF50',
    padding: 15,
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
  },

});

export const navBarStyles = StyleSheet.create({
  bottomNavbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    color: 'white',
  },

});