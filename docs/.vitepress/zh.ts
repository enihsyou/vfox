/*
 *    Copyright 2025 Han Li and contributors
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 */

import {DefaultTheme, defineConfig} from 'vitepress'

export const zh = defineConfig({
    lang: 'zh-Hans',
    description: '跨平台、可扩展的版本管理器',

    themeConfig: {
        nav: nav(),
        sidebar: sidebar(),
        editLink: {
            pattern: 'https://github.com/version-fox/vfox/edit/main/docs/:path',
            text: '在 GitHub 上编辑此页面'
        },

        footer: {
            message: '基于 Apache 2.0 许可发布',
            copyright: '版权所有 © 2023-现在 李晗'
        },
        docFooter: {
            prev: '上一页',
            next: '下一页'
        },
        outline: {
            label: '页面导航'
        },
    }
})

function nav(): DefaultTheme.NavItem[] {
    return [
        {text: '首页', link: '/zh-hans/'},
        {text: '文档', link: '/zh-hans/guides/intro'},
        {text: '常见问题', link: '/zh-hans/guides/faq'},
        {text: '插件列表', link: '/zh-hans/plugins/available'}
    ]
}

function sidebar(): DefaultTheme.Sidebar {
    return [
        {
            text: '入门',
            items: [
                {text: '什么是vfox?', link: '/zh-hans/guides/intro'},
                {text: '快速入门', link: '/zh-hans/guides/quick-start'},
                {text: '配置', link: '/zh-hans/guides/configuration'},
                {text: '常见问题', link: '/zh-hans/guides/faq'},
            ]
        },
        {
            text: '用法',
            items: [
                {text: '核心', link: '/zh-hans/usage/core-commands'},
                {text: '插件', link: '/zh-hans/usage/plugins-commands'},
                {text: '垫片 & PATH', link: '/zh-hans/usage/shims-path'},
                {text: '所有命令', link: '/zh-hans/usage/all-commands'},
            ]
        },
        {
            text: '插件',
            items: [
                {
                    text: '成为作者',
                    items:[
                        {text: '创建插件', link: '/zh-hans/plugins/create/howto'},
                        {text: '如何提交到索引仓库?', link: '/zh-hans/plugins/create/howto_registry'},
                        {text: '插件模板', link: 'https://github.com/version-fox/vfox-plugin-template'},
                    ]
                }, 
                {
                    text: '标准库',
                    items:[
                        {text: 'http', link: '/zh-hans/plugins/library/http'},
                        {text: 'html', link: '/zh-hans/plugins/library/html'},
                        {text: 'json', link: '/zh-hans/plugins/library/json'},
                        {text: 'strings', link: '/zh-hans/plugins/library/strings'},
                        {text: 'archiver', link: '/zh-hans/plugins/library/archiver'},
                    ]
                }, 

                {text: '可用插件', link: '/zh-hans/plugins/available'},
            ]
        },
        {
            text: '其他',
            items: [
                {text: '与asdf-vm对比', link: '/zh-hans/misc/vs-asdf'},
            ]
        },
    ]
}