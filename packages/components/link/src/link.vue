<template>
<!-- @wzm 2022-12-5 -->
  <a
    :class="linkKls"
    :href="disabled || !href ? undefined : href"
    @click="handleClick"
  >
    <!-- 前置icon -->
    <el-icon v-if="icon"><component :is="icon" /></el-icon>
    <!-- 默认插槽 -->
    <span v-if="$slots.default" :class="ns.e('inner')">
      <slot />
    </span>
    <!-- 后置icon插槽 -->
    <slot v-if="$slots.icon" name="icon" />
  </a>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { ElIcon } from '@element-plus/components/icon'
import { useNamespace } from '@element-plus/hooks'
import { linkEmits, linkProps } from './link'

defineOptions({
  name: 'ElLink',
})
const props = defineProps(linkProps)
const emit = defineEmits(linkEmits)

const ns = useNamespace('link')

const linkKls = computed(() => [
  ns.b(),
  ns.m(props.type),
  ns.is('disabled', props.disabled),
  ns.is('underline', props.underline && !props.disabled),
])

function handleClick(event: MouseEvent) {
  if (!props.disabled) emit('click', event)
}
</script>
