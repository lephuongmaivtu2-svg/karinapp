self.addEventListener("install", (event) => {
  console.log("Service Worker installed");
});

self.addEventListener("fetch", (event) => {
  // cho phép web hoạt động offline (có thể viết thêm cache logic)
});
