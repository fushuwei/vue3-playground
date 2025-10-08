<script setup lang="ts">
import { ref } from "vue";

const tips = ref("这里是鼠标悬停的提示文字...");

const defaultColor = ref("blue");

const message = ref("红色");
const messageColor = ref("red");

function changeColor(color: string) {
  console.log(color);
  if (color === "red") {
    message.value = "绿色";
    messageColor.value = "green";
  } else if (color === "green") {
    message.value = "蓝色";
    messageColor.value = "blue";
  } else if (color === "blue") {
    message.value = "红色";
    messageColor.value = "red";
  }
}
</script>

<template>
  <p><span :title="tips" v-on:click="">将鼠标悬停在我身上几秒钟会出现提示信息</span></p>

  <p><span style="color: blue">这是蓝色的字, HTML 写法直接指定 style 属性</span></p>

  <p><span :style="{color: 'blue'}">这是蓝色的字, 通过 v-bind 动态绑定 style 属性</span></p>

  <p><span
    :style="{color: defaultColor}">这是蓝色的字, 通过 v-bind 动态绑定 style 属性, 并通过 ref 响应式变量赋值</span></p>

  <p><span :class="{blue: true}">这是蓝色的字, 通过 v-bind 动态绑定 class 属性, 属性值是对象类型</span></p>

  <p><span :class="['blue', 'blue2']">这是蓝色的字, 通过 v-bind 动态绑定 class 属性, 属性值是对象数组类型</span></p>

  <p><span :style="{color: messageColor}" @click="changeColor(messageColor)">这是 <span class="blue2">{{
      message
    }}</span> 的字, 点击文字会变换颜色</span></p>
</template>

<style scoped>
.blue {
  color: v-bind(defaultColor);
}

.blue2 {
  font-family: "Heiti SC", serif;
  font-weight: bold;
  text-decoration: underline;
}
</style>
