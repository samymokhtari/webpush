self.addEventListener("push", (e) => {
  const data = e.data.json();
  self.registration.showNotification(data.title, {
    body: data.body,
    image:
      "https://pixabay.com/get/g47f29b0550e39a08bc1e7cda893706a3b578811bc0550886921f520adb8b44f5f1cebdf22df106c1a116c11d90026f578ab5b4e99272ddf9cf6ab1c9e1014e4b8c40d6c966d5e55580cdcd0ce89442fa_1280.png",
    icon: "https://pixabay.com/get/g47f29b0550e39a08bc1e7cda893706a3b578811bc0550886921f520adb8b44f5f1cebdf22df106c1a116c11d90026f578ab5b4e99272ddf9cf6ab1c9e1014e4b8c40d6c966d5e55580cdcd0ce89442fa_1280.png", // icon
  });
});
