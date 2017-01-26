# lazy-man
A lazy man is based on es6.\n
微信面试题，需要做到以下实现：\n

LazyMan(“Hank”)\n
//Hi! This is Hank!

LazyMan(“Hank”).sleep(10).eat(“dinner”)
// Hi! This is Hank!
// 等待10秒..
// Wake up after 10
// Eat dinner~

LazyMan(“Hank”).eat(“dinner”).eat(“supper”)
// Hi This is Hank!
// Eat dinner~
// Eat supper~

LazyMan(“Hank”).sleepFirst(5).eat(“supper”)
// 等待5秒
// Wake up after 5
// Hi This is Hank!
// Eat supper
