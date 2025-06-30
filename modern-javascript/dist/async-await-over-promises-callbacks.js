// 使用 `async/await` 語法來處理非同步操作，取代原始的 Promise 鏈或回呼函式 (Callbacks)。
// `async/await` 使得非同步程式碼看起來更像同步程式碼，提高了可讀性和可維護性。
// callback-hell-example.js
// 模擬非同步函式：獲取使用者資料
function getUserCallback(userId, callback) {
    console.log(`Callback: Fetching user ${userId}...`);
    setTimeout(() => {
        if (userId === 1) {
            callback(null, { id: 1, name: 'Alice' });
        }
        else {
            callback('User not found', null);
        }
    }, 100);
}
// 模擬非同步函式：獲取使用者貼文
function getPostsCallback(userId, callback) {
    console.log(`Callback: Fetching posts for user ${userId}...`);
    setTimeout(() => {
        if (userId === 1) {
            callback(null, ['Post A', 'Post B']);
        }
        else {
            callback('No posts found', null);
        }
    }, 150);
}
// --- 回呼地獄的實際操作 ---
console.log('--- Traditional Callback Hell Example ---');
getUserCallback(1, (err, user) => {
    if (err) {
        console.error('Callback Error (User):', err);
        return;
    }
    console.log('Callback: User fetched:', user.name);
    getPostsCallback(user.id, (err, posts) => {
        if (err) {
            console.error('Callback Error (Posts):', err);
            return;
        }
        console.log('Callback: Posts fetched:', posts);
        console.log('Callback: All data processed!');
    });
});
console.log('\n'); // 增加分隔線
// // 模擬非同步函式：獲取使用者資料 (返回 Promise)
// function getUserPromise(userId) {
//   console.log(`Promise: Fetching user ${userId}...`);
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (userId === 1) {
//         resolve({ id: 1, name: 'Alice' });
//       } else {
//         reject('User not found');
//       }
//     }, 100);
//   });
// }
// // 模擬非同步函式：獲取使用者貼文 (返回 Promise)
// function getPostsPromise(userId) {
//   console.log(`Promise: Fetching posts for user ${userId}...`);
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (userId === 1) {
//         resolve(['Post A', 'Post B']);
//       } else {
//         reject('No posts found');
//       }
//     }, 150);
//   });
// }
// // --- Promise 鏈的實際操作 ---
// console.log('--- Promise Chaining Example ---');
// getUserPromise(1)
//   .then(user => {
//     console.log('Promise: User fetched:', user.name);
//     return getPostsPromise(user.id); // 返回另一個 Promise，形成鏈
//   })
//   .then(posts => {
//     console.log('Promise: Posts fetched:', posts);
//     console.log('Promise: All data processed!');
//   })
//   .catch(error => { // 統一處理鏈中任何環節的錯誤
//     console.error('Promise Error:', error);
//   });
// console.log('\n'); // 增加分隔線
// // async-await-example.js
// // 模擬非同步函式：獲取使用者資料 (返回 Promise)
// // 與 Promise 鏈版本共用相同的 Promise 函式
// function getUserAsync(userId) {
//   console.log(`Async/Await: Fetching user ${userId}...`);
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (userId === 1) {
//         resolve({ id: 1, name: 'Alice' });
//       } else {
//         reject('User not found');
//       }
//     }, 100);
//   });
// }
// // 模擬非同步函式：獲取使用者貼文 (返回 Promise)
// // 與 Promise 鏈版本共用相同的 Promise 函式
// function getPostsAsync(userId) {
//   console.log(`Async/Await: Fetching posts for user ${userId}...`);
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (userId === 1) {
//         resolve(['Post A', 'Post B']);
//       } else {
//         reject('No posts found');
//       }
//     }, 150);
//   });
// }
// // --- async/await 的實際操作 ---
// async function processUserAndPosts() {
//   console.log('--- Async/Await Example ---');
//   try {
//     // 步驟 1: 等待使用者資料
//     const user = await getUserAsync(1);
//     console.log('Async/Await: User fetched:', user.name);
//     // 步驟 2: 等待使用者貼文
//     const posts = await getPostsAsync(user.id);
//     console.log('Async/Await: Posts fetched:', posts);
//     console.log('Async/Await: All data processed!');
//   } catch (error) {
//     // 統一的錯誤處理，就像同步程式碼的 try...catch
//     console.error('Async/Await Error:', error);
//   }
// }
// processUserAndPosts();
