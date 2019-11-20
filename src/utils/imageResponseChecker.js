export async function imageResponseChecker(response, callback) {
    if (response.didCancel || response.customButton) {
      callback(response);
      return;
    }
    if (!response || !response.path || !response.uri) {
        callback(null)
    } else {
            callback(response)
     }
}
