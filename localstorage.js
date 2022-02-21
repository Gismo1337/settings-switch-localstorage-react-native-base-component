import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * @param {string} collection collection's name to get from storage.
 */
const getLocaleStorageData = async (collection) => {
    try {
        const jsonValue = await AsyncStorage.getItem(collection)

        console.log('Storage loaded:')
        console.log(jsonValue)
        console.log('######################################')
        return jsonValue != null ? JSON.parse(jsonValue) : null;

    } catch (e) {
        // error reading value
        console.log('Error while getLocaleStorage in localstorage.js')
        console.log(e)
        console.log('######################################')
    }
}

/**
 * @param {string} collection collection's name to store in.
 * @param {string} value object to store in.
 */
const storeLocaleStorageData = async (collection, value) => {
    try {

        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(collection, jsonValue)
    } catch (e) {
        console.log('Error while storeData in async Storage')
        console.log(e)
        console.log('######################################')
    }
}

const clearAll = async () => {
    try {
        await AsyncStorage.clear()
        console.log('clearereaarerarrd')
    } catch (e) {
        // clear error
    }

    console.log('Done.')
}

export { getLocaleStorageData, storeLocaleStorageData, clearAll }