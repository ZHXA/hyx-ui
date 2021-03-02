
# State 状态
----
### 基础用法
<div class="demo-block">
  <div >
    <hyx-state>在线 </hyx-state>
    <hyx-state type="primary">调试</hyx-state>
    <hyx-state type="offline">下线</hyx-state>
    <hyx-state type="warning">暂停</hyx-state>
    <hyx-state size="small">审核通过</hyx-state>
    <hyx-state size="small" type="offline">待提交</hyx-state>
    <hyx-state size="small" type="danger">审核不通过</hyx-state>
    <hyx-state size="small"  type="warning">审核中</hyx-state>

  </div>
</div>

::: demo
```html


<div class="demo-block">
      <hyx-state>在线</hyx-state>
      <hyx-state type="primary">调试</hyx-state>
      <hyx-state type="offline">下线</hyx-state>
      <hyx-state type="warning">暂停</hyx-state>
      <hyx-state size="small">在线</hyx-state>
      <hyx-state size="small">审核通过</hyx-state>
      <hyx-state size="small" type="offline">待提交</hyx-state>
      <hyx-state size="small" type="danger">审核不通过</hyx-state>
      <hyx-state size="small"  type="warning">审核中</hyx-state>

</div>


```
:::






### Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type | 标签风格类型 | String |  `primary`, `success`, `warning`, `offline` ，`danger`| success |
| size | 标签大小 | String |  `mini`, `small`, `medium`| mini |
