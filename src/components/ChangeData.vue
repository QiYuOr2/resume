<template>
  <div>
    <div
      class="print:hidden flex flex-col fixed top-0 right-0 shadow-md bg-gray-50 rounded"
      v-if="visible"
    >
      <textarea
        class="bg-gray-50 py-2 px-4"
        cols="30"
        rows="10"
        v-model="data"
      ></textarea>
      <p class="text-center text-sm">Ctrl + P 打印为PDF时会隐藏该部分</p>
      <button
        class="py-1 px-2 bg-green-500 text-white font-semibold rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
        @click="handleClick"
      >
        保存
      </button>
      <button
        class="py-1 px-2 bg-white text-black font-semibold rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75"
        @click="hidden"
      >
        隐藏
      </button>
    </div>
    <button
      class="print:hidden fixed top-0 right-0 shadow-md py-1 px-2 bg-white text-black font-semibold rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75"
      @click="show"
      v-else
    >
      修改数据
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  props: {
    raw: String,
  },
  emits: ['change'],
  setup(props, { emit }) {
    const data = ref(props.raw);
    const visible = ref(false);

    const handleClick = () => {
      emit('change', data.value);
    };

    const hidden = () => {
      visible.value = false;
    };

    const show = () => {
      visible.value = true;
    };

    return { data, handleClick, hidden, visible, show };
  },
});
</script>
