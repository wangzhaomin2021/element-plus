<template>
  <!-- @wzm 2022-12-5 -->
  <div :class="kls">
    <!-- 面包屑插槽 -->
    <div :class="ns.e('breadcrumb')">
      <slot name="breadcrumb" />
    </div>
    <div :class="ns.e('header')">
      <div :class="ns.e('left')">
        <div
          :class="ns.e('back')"
          role="button"
          tabindex="0"
          @click="handleClick"
        >
          <!-- 头部图标插槽 -->
          <div
            v-if="icon || $slots.icon"
            :aria-label="title || t('el.pageHeader.title')"
            :class="ns.e('icon')"
          >
            <slot name="icon">
              <el-icon v-if="icon">
                <component :is="icon" />
              </el-icon>
            </slot>
          </div>
          
          <!-- 头部标题插槽 -->
          <div :class="ns.e('title')">
            <slot name="title">{{ title || t('el.pageHeader.title') }}</slot>
          </div>
        </div>
        <el-divider direction="vertical" />
        
        <!-- 头部内容插槽 -->
        <div :class="ns.e('content')">
          <slot name="content">{{ content }}</slot>
        </div>
      </div>

      <!-- 操作插槽 -->
      <div v-if="$slots.extra" :class="ns.e('extra')">
        <slot name="extra" />
      </div>
    </div>
    
    <!-- 内容 -->
    <div v-if="$slots.default" :class="ns.e('main')">
      <slot />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed, useSlots } from 'vue'
import { ElIcon } from '@element-plus/components/icon'
import { ElDivider } from '@element-plus/components/divider'

import { useLocale, useNamespace } from '@element-plus/hooks'
import { pageHeaderEmits, pageHeaderProps } from './page-header'

defineOptions({
  name: 'ElPageHeader',
})

defineProps(pageHeaderProps)
const emit = defineEmits(pageHeaderEmits)
const slots = useSlots()

const { t } = useLocale()
const ns = useNamespace('page-header')
const kls = computed(() => {
  return [
    ns.b(),
    {
      [ns.m('has-breadcrumb')]: !!slots.breadcrumb,
      [ns.m('has-extra')]: !!slots.extra,
      [ns.is('contentful')]: !!slots.default,
    },
  ]
})

function handleClick() {
  emit('back')
}
</script>
