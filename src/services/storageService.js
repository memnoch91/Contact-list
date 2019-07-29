
function pushUpload(upload, path) {
    const randomId = Math.random()
        .toString(36)
        .substring(2);
    return new Promise(resolve => {
        const storageRef = firebase.storage().ref();
        const uploadTask = storageRef
            .child(`${path}/${randomId}/${upload.file.name}`)
            .put(upload.file);
        uploadTask.on(
            firebase.storage.TaskEvent.STATE_CHANGED,
            snapshot => {
                upload.progress =
                    (uploadTask.snapshot.bytesTransferred /
                        uploadTask.snapshot.totalBytes) *
                    100;
            },
            error => {
                console.log(error);
            },
            () => {
                uploadTask.snapshot.ref.getDownloadURL().then(data => {
                    upload.url = data;
                    resolve(upload.url);
                });
                upload.name = upload.file.name;
            }
        );
    });
}

// Put this function in a service and since it returns a promise, on your component retrieve the URL by calling:
function save() {
    const file = this.selectedFiles.item(0);
    const currentUpload = new FileUpload(file);
    YourUploadService.pushUpload(currentUpload, 'YOUR_PATH')
        .then(data => {
            console.log(data.toString());
        })
}
// There you go, you have the URL written in the console.