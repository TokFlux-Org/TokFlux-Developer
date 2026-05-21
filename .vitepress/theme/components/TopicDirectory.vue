<script setup lang="ts">
const groups = [
  {
    title: '教程',
    description: '面向接入 TokFlux 的应用团队，覆盖集成过程中的核心做法。',
    items: [
      'OpenAI-compatible SDK 接入',
      '流式输出与重试机制',
      '模型路由基础'
    ]
  },
  {
    title: '错误排查',
    description: '覆盖供应商鉴权、额度、格式与超时问题的短篇排查笔记。',
    items: [
      '401 供应商配置错误',
      '429 流量压力',
      '请求格式异常排查'
    ]
  },
  {
    title: '对比分析',
    description: '帮助团队判断是否引入网关，以及如何以可运维的方式使用它。',
    items: [
      '直连供应商 vs 网关',
      '单模型 vs 路由',
      '托管式 vs 自运维'
    ]
  },
  {
    title: '产品公告',
    description: '用于发布上线说明、版本更新与重要变更。',
    items: [
      '博客更新',
      '功能发布',
      '版本重点'
    ]
  }
]
</script>

<template>
  <section class="tokflux-directory">
    <article v-for="group in groups" :key="group.title" class="tokflux-directory-item">
      <h3>{{ group.title }}</h3>
      <p>{{ group.description }}</p>
      <ul>
        <li v-for="item in group.items" :key="item">{{ item }}</li>
      </ul>
    </article>
  </section>
</template>
