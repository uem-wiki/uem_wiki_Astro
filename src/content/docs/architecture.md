---
title: 架构总览
description: 了解这个 Wiki 的页面层、内容层和导航层如何协作。
section: 核心概念
order: 1
---

## 三层结构

内容位于 `src/content/docs`，页面模板位于 `src/pages`，导航配置位于 `src/data/navigation.ts`。这种拆分让写作和开发彼此独立。

## 为什么选择 Astro

Astro 默认输出静态 HTML，适合文档站点的速度和可维护性；需要交互时，再按需引入组件即可。
