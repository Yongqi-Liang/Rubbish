// // invitation.js

// // 获取HTML元素
// const body = document.getElementById('invitationBody');

// // 加载JSON数据
// fetch('invitationData.json')
//     .then(response => response.json())
//     .then(data => {
//         // 触发淡入效果
//         body.style.animation = 'fadeIn 1s ease-in-out forwards';

//         const rsvpButton = document.getElementById('rsvpButton');

//         rsvpButton.addEventListener('click', () => {
//             // 触发淡出效果
//             const container = document.querySelector('.container');
//             container.style.animation = 'fadeOut 1s ease-in-out forwards';

//             // 创建烟花元素
//             const fireworks = document.createElement('div');
//             fireworks.classList.add('firework');

//             // 生成随机颜色并应用到烟花元素
//             const randomColor = getRandomColor();
//             fireworks.style.backgroundColor = randomColor;

//             document.body.appendChild(fireworks);

//             // 随机设置烟花的位置
//             const randomX = Math.random() * window.innerWidth;
//             fireworks.style.left = `${randomX}px`;

//             // 在动画结束后删除烟花元素
//             fireworks.addEventListener('animationend', () => {
//                 fireworks.remove();

//                 // 更新页面样式为JSON数据中定义的颜色
//                 applyDynamicStyles(data);
//             });
//         });

//         // 函数用于根据JSON数据应用动态样式
//         function applyDynamicStyles(data) {
//             body.style.backgroundColor = data.initialData.backgroundColor;
//             body.style.color = data.initialData.textColor;
//         }

//         // 初始时应用初始状态
//         applyDynamicStyles(data);
//     });

// // 函数用于生成随机颜色
// function getRandomColor() {
//     const letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }
