# vs-keymap

自用快捷键，使用的命令全部为 vscode 原生命令

### vscode好用的默认快捷键

- alt+鼠标，可以自定义多光标。可以通过 `"editor.multiCursorModifier": "alt"` 修改搭配的按键
- shift+alt+鼠标，矩形多光标

- 太过于常见的不写，比如最常见的 ctrl+a/z/x/c/v//y/f/h/w/t/...... 这些都是非常常见的。 (小历史，曾经的 ctrl+w 不是 VScode 默认的关闭标签页快捷键)

| key                   | command                                     | 备注                                                                                                     |
| --------------------- | ------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| ctrl+alt+up           | editor.action.insertCursorAbove             | 向上增加一个光标光标，最有用的功能之一！✨✨✨✨✨✨✨✨✨✨                                             |
| ctrl+alt+down         | editor.action.insertCursorBelow             | 向下增加一个光标光标，最有用的功能之一！✨✨✨✨✨✨✨✨✨✨                                             |
|                       |                                             |                                                                                                          |
| ctrl+shift+l          | editor.action.selectHighlights              | 选中所有匹配项，非常有用✨✨✨✨✨                                                                       |
| ctrl+shift+l          | selectAllSearchEditorMatches                | 搜索时选中所有匹配项，非常有用✨✨✨✨✨                                                                 |
|                       |                                             |                                                                                                          |
| alt+up                | editor.action.moveLinesUpAction             | 将当前行上移，✨✨✨                                                                                     |
| alt+down              | editor.action.moveLinesDownAction           | 将当前行下移，✨✨✨                                                                                     |
| alt+z                 | editor.action.toggleWordWrap                | 显示时是否自动换行，✨✨✨                                                                               |
| ctrl+enter            | editor.action.insertLineAfter               | 向下换行                                                                                                 |
| ctrl+shift+enter      | editor.action.insertLineBefore              | 向上换行                                                                                                 |
| shift+alt+up          | editor.action.copyLinesUpAction             | 向上拷贝当前行                                                                                           |
| shift+alt+down        | editor.action.copyLinesDownAction           | 向下拷贝当前行                                                                                           |
|                       |                                             |                                                                                                          |
| ctrl+r                | workbench.action.openRecent                 | 显示曾经打开过的文件夹/文件                                                                              |
| ctrl+pageup           | workbench.action.previousEditor             | 向左切换标签页                                                                                           |
| ctrl+pagedown         | workbench.action.nextEditor                 | 向右切换标签页                                                                                           |
|                       |                                             |                                                                                                          |
| ctrl+i                | editor.action.triggerSuggest                | 触发建议                                                                                                 |
| ctrl+space            | editor.action.triggerSuggest                | 触发建议                                                                                             |
| ctrl+shift+space      | editor.action.triggerParameterHints         | 触发参数提示                                                                                             |
| ctrl+oem_period       | editor.action.quickFix                      | 快速修复，oem_period 是 `.` 按键                                                                         |
| shift+alt+oem_period  | editor.action.autoFix                       | 自动修复                                                                                                 |
|                       |                                             |                                                                                                          |
| ctrl+b                | workbench.action.toggleSidebarVisibility    | 控制侧边栏的显示与隐藏                                                                                   |
| ctrl+j                | workbench.action.togglePanel                | 控制 Panel 的显示与隐藏                                                                                  |
| ctrl+shift+u          | workbench.action.output.toggleOutput        | 控制 output 的显示与隐藏                                                                                 |
| ctrl+oem_3            | workbench.action.terminal.toggleTerminal    | 控制 Terminal 的显示与隐藏，oem_3 是 `` ` `` 按键                                                        |
| ctrl+shift+oem_3      | workbench.action.terminal.new               | 新建 Terminal                                                                                            |
| ctrl+shift+c          | workbench.action.terminal.openNativeConsole | 打开原生终端窗口，目录是当前工作区                                                                       |
|                       |                                             |                                                                                                          |
| ctrl+oem_plus         | workbench.action.zoomIn                     | 页面放大，oem_plus 是 `+` 按键                                                                           |
| ctrl+oem_minus        | workbench.action.zoomOut                    | 页面放小，oem_minus 是 `-` 按键                                                                          |
| ctrl+backspace        | deleteWordLeft                              | 相当于 ctrl+shift+left 然后 backspace                                                                    |
| ctrl+shift+n          | workbench.action.newWindow                  | 打开新窗口                                                                                               |
| shift+alt+r           | revealFileInOS                              | 在本地资源管理器中显示，搭配自定义的 alt+oem_3                                                           |
| shift+alt+f           | editor.action.formatDocument                | 格式化                                                                                                   |
| shift+alt+right       | editor.action.smartSelect.expand            | 向右只能扩展，比如 FooBar 单词只选中 Foo。如果不生效请查看 editor.smartSelect.selectSubwords 是否为 true |
|                       |                                             |                                                                                                          |
| ctrl+k m              | workbench.action.editor.changeLanguageMode  | 指定当前文件语言类型                                                                                     |
| ctrl+k s              | saveAll                                     | 对所有标签页执行保存                                                                                     |
| ctrl+k z              | workbench.action.toggleZenMode              | 切换专注模式/沉浸模式                                                                                    |
| ctrl+k ctrl+f         | editor.action.formatSelection               | 格式化所选内容                                                                                           |
| ctrl+k ctrl+s         | workbench.action.openGlobalKeybindings      | 查看快捷键                                                                                               |
| ctrl+k ctrl+j         | editor.unfoldAll                            | 全部展开                                                                                                 |
| ctrl+k ctrl+0         | editor.foldAll                              | 全部折叠                                                                                                 |
| ctrl+k ctrl+l         | editor.toggleFold                           | 折叠/展开当前最近的“可展开折叠区域”                                                                      |
|                       |                                             |                                                                                                          |
| ctrl+shift+\          | editor.action.jumpToBracket                 | 快速跳到配对的括号，比如 () [] {}                                                                        |
| ctrl+shift+oem_period | breadcrumbs.focusAndSelect                  | 快速定位到 breadcrumbs 并选择，可以不借助鼠标来打开其他临近文件                                          |
|                       |                                             |                                                                                                          |

### 某些知名常用扩展快捷键


| key        | command          | extension                 | 备注                                                             |
| ---------- | ---------------- | ------------------------- | ---------------------------------------------------------------- |
| ctrl+alt+n | code-runner.run  | formulahendry.code-runner | 运行代码                                                         |
| ctrl+alt+m | code-runner.stop | formulahendry.code-runner | 终止代码。因为习惯将程序输出在 output 中，所以这个命令挺有用的。 |

