import ImagePicker from "react-native-image-picker";
import { imageResponseChecker } from './imageResponseChecker'

// 

// Post Direct Camera Open
export async function mediaHandler(callback) {
    const options = {
        noData: true,
        storageOptions: {
            skipBackup: true,
        }
    };
    await ImagePicker.showImagePicker(options, (response) => {
        imageResponseChecker(response, callback)
    })
};

// // Post Direct Gallery for Images/Gif/Video
export async function galleryHandler(callback) {
    // console.log("clicked")
    const options = {
        noData: true,
        mediaType: "photo",
    };
    await ImagePicker.launchImageLibrary(options, response => {
        imageResponseChecker(response, callback)
    })
}
