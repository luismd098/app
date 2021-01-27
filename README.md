# app
Carpeta principal de la aplicacion

Sustituir Archivo App.js

Instalar:

npm install @react-navigation/native

npm install @react-navigation/stack

npm install --save axios

npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view

Para usar el AsyncStorage (aun no esta listo):
npm install -S @react-native-community/async-storage

Image Picker

npm install -s react-native-image-picker 

AsyncStorage

On Android devices, the current AsyncStorage size is set to 6MB by default. Reaching this limit is going to result in errors like database or disk is full. There are valid reasons why this limit exists but if there is a need to increase the size, you can do that. 

**************Open the android/gradle.properties file and add the following:

android.useAndroidX=true

android.enableJetifier=true

// add the below line

AsyncStorage_db_size_in_MB=10

This file represents any project-wise settings that you can use to override the default values or settings.

Image Picker

https://github.com/react-native-image-picker/react-native-image-picker
