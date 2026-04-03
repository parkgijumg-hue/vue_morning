// import axios from 'axios'; // // 기본 then 방식 -> 에러 잡을때 catch // //
methods // const requestAPI = () => { // // const url
='http://loc/alhost:3000/todos/1'; // const url = '/api/todos/1'; // axios //
.get(url) // .then((Response) => { // console.log(Response); //
console.log('============'); // console.log('#응답객채 :', Response.data); // })
// .catch((e) => { // console.log('## 다음 오류가 발생했습니다.'); // if (e
instanceof Error) console.log(e.message); // else console.log(e); // }); // };
// // async , await 방식 -> 에러 잡을때 try catch // const requestAPI2 = async
() => { // const url = '/api/todos/1'; // try { // // 에러 발생할 여지가 큰
코드를 넣어줌 // const Response = await axios.get(url); // console.log('#
응답객체 : ', Response); // //try 안에서 에러가 발생하면 catch함수가 자동으로
실행(호출)됨. // } catch (error) { // console.log('## 다음 오류가
발생했습니다.'); // if (e instanceof Error) console.log(e.message); // else
console.log(e); // } // }; // then : get 한 이후 결과를 처리할 내용 // catch :
에러가 발생했을 때 처리할 내용 // requestAPI(); // //

<template>
  <div class="container">
    <Header />
    <router-view />
  </div>
</template>
<script setup>
import { reactive, computed, provide } from 'vue';
import Header from '@/components/Header.vue';

const states = reactive({
  todoList: [
    // { id: 1, todo: 'ES6학습', desc: '설명1', done: false },
    // { id: 2, todo: 'React학습', desc: '설명2', done: false },
    // { id: 3, todo: 'ContextAPI 학습', desc: '설명3', done: true },
    // { id: 4, todo: '야구경기 관람', desc: '설명4', done: false },
  ],
});
const addTodo = ({ todo, desc }) => {
  states.todoList.push({ id: new Date().getTime(), todo, desc, done: false });
};
const updateTodo = ({ id, todo, desc, done }) => {
  let index = states.todoList.findIndex((todo) => todo.id === id);
  states.todoList[index] = { id, todo, desc, done };
};
const deleteTodo = (id) => {
  let index = states.todoList.findIndex((todo) => todo.id === id);
  states.todoList.splice(index, 1);
};
const toggleDone = (id) => {
  let index = states.todoList.findIndex((todo) => todo.id === id);
  states.todoList[index].done = !states.todoList[index].done;
};
provide(
  'todoList',
  computed(() => states.todoList),
);
provide('actions', { addTodo, deleteTodo, toggleDone, updateTodo });
</script>
