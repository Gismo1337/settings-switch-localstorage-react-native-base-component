
 # Settings Switch to Store value in Localstorage

This Component is made to store the individual usersettings like darkmode, postAnonym or something like that. 
The value are stored in Locastorage to check the state everywhere in you app without a active database connection.




## Use

#### Render a Switch on your Screen

```
   <SettingsSwitch switchname={'Anonym Posts:'} isAnonym={false} />
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `{Anpnym Posts:}` | `string` | **Required**. Switch description left side of switch |
| `isAnonym` | `string` | **Required**. Name of keyvalue |
| `{false}` | `string` | **Required**. Name of Itemvalue |

#### Get item

```
 getLocaleStorageData(keyvalue)
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `keyvalue`      | `string` | **Required**. Id of keyvalue to fetch |




## 🔗 Links
[![devto](https://img.shields.io/badge/dev.to-000?style=for-the-badge&logo=dev.to&logoColor=white)](https://dev.to/gismo1337)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/sebastianrichter1337/)
[![youtube](https://img.shields.io/badge/youtube-f70025?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/gismo1337dev)
[![expo](https://img.shields.io/badge/expo-000000?style=for-the-badge&logo=expo&logoColor=white)](https://expo.dev/@g1sm0?tab=snacks)