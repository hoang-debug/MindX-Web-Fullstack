## Ex1
```
fs.writeFile("text.txt", data, (err) => {
  err ? console.log(err) : console.log("File written successfully");
});
```
## Ex2
```
const writeFile = (path, data) => {
  // Hoàn thiện hàm
  return new Promise((resolve, rejects) => {
         fs.writeFile(path, JSON.stringify(data), (err) => {
             (err) && rejects(err = 'lỗi')
             resolve(true)
         })
     })
}
```
## Ex4
```
async function wait(time) {
 return new Promise((resolve) => setTimeout(resolve, time))
}
```