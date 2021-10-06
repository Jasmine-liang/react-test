# 任务简介：

在这个 code test 中，希望大家利用 ant design 制作几个简单的 react 前端组件。

## 主要任务：

- 在 `pages/index.js` 中，用表格的方式展示 `sample-data.json` 中的数据
- 除了 `id` field 之外，展示 `sample-data.json` 中的所有数据。
- 在表格中添加一个 `Actions` 列，`Actions` 列展示一个文字为 `Delete` 的按钮
- 用户点击 `Delete` 按钮后弹出一个 confirm 提示，提供 yes / no 的选项供用户选择。
- 不需要调用任何 API，只需在用户点击 yes 后在 console 中打印出相关信息（如该订单的 id）就行。
- bonus：在用户点击了删除并点击 yes 后，将该行从表格中移除。
- 不需要任何的额外 style

## Tips:

- 已经在 package.json 中添加了 ant desgin，并引入了 ant design 的相关 css。安装 dependencies 之后可以直接调用。
- 可以用不同文件夹如 `components` 整理不同的文件。
- 在 ant design `Table` 组件的 [columns API](https://ant.design/components/table/#Column) 中，可以通过 `render` API 在单元格内渲染自定义的组件。

## 参考文档：

- [next.js](https://nextjs.org/)
- [Ant Design](https://ant.design/)
- 可能用到的 ant design 组件：
- [Table](https://ant.design/components/table/)
- [Popconfirm](https://ant.design/components/popconfirm)
- [Button](https://ant.design/docs/spec/buttons#header)

## 提交方式：

1. 邮件发送：你可以 clone 本 repo，然后将你的代码打包发送我们。由于有小伙伴反映发送公司邮箱的时候会遇到不安全提示（部分不安全提示可能是 `.zip` 文件导致的），公司邮箱邮件也出现在了垃圾邮箱里，大家可以选择以下邮箱的任意一个发送：

- hello@wohu.studio
- unicar9@gmail.com
- xwangl213@gmail.com
- xwangl520@foxmail.com

也可以考虑用网盘或者 [WeTransfer](https://wetransfer.com/) 发送给我们。注明你的名字就好~

2. 将代码上传到自己的 github 账户然后把 repo 地址分享给我们~
