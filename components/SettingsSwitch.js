import React, { useState } from 'react'
import { HStack, Text, Switch, View } from "native-base"
import { storeLocaleStorageData } from '../localstorage.js'

/**
 * Settings Switch Component Handwritten By https://github.com/Gismo1337
 * @param {string} props as component option like this: <SettingsSwitch switchName={'Use Darkmode:'} useDarkmode={false} />
 * YOU HAVE TO WRITE AN 2nd OPTION {SwitchKey}={SwitchValue} like useDarkmode={false}
 * THIS WOULD BE SAVE IN LOCALSTORAGE AS KEY:VALUE --- {useDarkmode:false}
 */
const SettingsSwitch = (props) => {

    const [isEnabled, setIsEnabled] = useState(false);
    const storeValue = !isEnabled
    let storeKey = Object.keys(props)[1].toLocaleString()
    const switchName = props.switchName

    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState);
        storeLocaleStorageData(storeKey, storeValue)

        console.log('Es wurden Einstellungen gespeichert: ' + storeKey + ": " + storeValue)
    }

    return (
        <View>
            <HStack alignItems="center" justifyContent={'flex-end'}>
                <Text>{switchName}</Text>
                <Switch
                    isChecked={isEnabled}
                    onToggle={toggleSwitch}
                />
                {isEnabled ? <Text italic fontSize='xs'>yes</Text> : <Text italic fontSize='xs'>no</Text>}
            </HStack>
        </View>
    );
}

export default SettingsSwitch