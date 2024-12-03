<script lang="ts" setup>
const routes = [
  {
    icon: 'file-icons:rmarkdown',
    type: 'md',
  },
  {
    icon: 'file-icons:yaml-alt4',
    type: 'yaml'
  }
]

const currentRoute = useRoute()

console.log(currentRoute)
</script>

<template>
  <div class="sidebar">
    <NuxtLink v-for="route in routes" :class="['sidebar-icon', { active: currentRoute.query.type === route.type }]"
      :to="`/editor?type=${route.type}`">
      <Icon :name="route.icon" size="24" />
    </NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 68px;
  padding: 10px 0;
  background-color: #fff;
  border-right: 1px solid #000;
  text-align: center;

  &-icon {
    width: 100%;
    padding: 20px 0;
    cursor: pointer;

    &.active {
      .iconify {
        color: rgb(5, 123, 48);
      }
    }

    &:hover {
      background-color: rgba(0, 0, 0, 0.025);

      .iconify {
        color: rgba(5, 123, 48, 0.421);
      }
    }
  }
}
</style>