
// Question - 2
// Implement a throttler that executes an array of tasks. When the throttler is passed a number, only executes that number of the tasks and passes the other tasks into a queue.
// Input:
// const task = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const count = 5;
// throttle(task, count, 2000); // [1, 2, 3, 4, 5] immediately
// throttle(task, count, 2000); // [6, 7, 8, 9, 10] after 2 seconds
// throttle(task, count, 2000); // [1, 2, 3, 4, 5] after 2 seconds

// const task = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,1, 2, 3, 4, 5, 6, 7, 8, 9, 10,1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let count = 5;
// let flag = true;
// let delay = 0;
// function throttle(task, counter, time) {
//   const result = [];
//   while (counter != 0) {
//     let ele = task.shift();
//     task.push(ele);
//     result.push(ele);
//     counter--;
//   }
//   if (flag)
//   {
//     console.log(result);
//     flag = false;
//   }
//   else {
//     setTimeout(() => {
//       console.log(result);
//     }, time + delay);
//     delay += time;
//   }
// }
// throttle(task, count, 2000);
// throttle(task, count, 2000);
// throttle(task, count, 2000);
// throttle(task, count, 2000);
// throttle(task, count, 2000);
