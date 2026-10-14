---
title: 欢迎来到 Atlas
description: 这里是团队知识库的起点。先了解它的组织方式，再开始添加你的第一篇文章。
section: 开始这里
order: 1
---

## 这是什么？

Atlas 是一个基于 Astro 的轻量 Wiki。文章使用 Markdown 编写，页面会自动生成统一的导航、排版和链接。

## 三分钟上手

1. 在 `src/content/docs` 创建一个 `.md` 文件。
2. 在文件顶部填写标题和描述等 frontmatter。
3. 在 `src/data/navigation.ts` 中加入它的导航链接。

```md
---
title: 我的第一篇文章
description: 一句话介绍这篇文章。
section: 指南
order: 1
---
```

保存后，Astro 会在 `/docs/文件名` 生成页面。
