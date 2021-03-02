<style scoped>
  .hyx-media-demo{
    width:224px;
    height:144px;
    margin-right: 10px;
    margin-bottom: 10px;
  }
</style>

# Media 媒体
----
### 基础用法
<div class="demo-block">
  <div class="meida-demo" >
     <hyx-media class="hyx-media-demo" src="http://124.42.103.156:8089/group1/M00/12/7B/CgrQc19kJVWAcDDxAAEIBi70ThQ698.amr">
     </hyx-media>
     <hyx-media class="hyx-media-demo" src="http://124.42.103.156:8089/group1/M00/12/29/CgrQc176_fOAfWl1ACVUV6IVQhs429.mp4">
     </hyx-media>
     <hyx-media  class="hyx-media-demo" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg">
     </hyx-media>

  </div>
</div>

::: demo
```html
<style>
  .hyx-media-demo{
    width:224px;
    height:144px;
    margin-right: 10px;
    margin-bottom: 10px;
  }
</style>

<div class="demo-block">
  <div class="meida-demo" >
     <hyx-media class="hyx-media-demo" src="http://124.42.103.156:8089/group1/M00/12/7B/CgrQc19kJVWAcDDxAAEIBi70ThQ698.amr">
     </hyx-media>
     <hyx-media class="hyx-media-demo" src="http://124.42.103.156:8089/group1/M00/12/29/CgrQc176_fOAfWl1ACVUV6IVQhs429.mp4">
     </hyx-media>
     <hyx-media  class="hyx-media-demo" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg">
     </hyx-media>


  </div>
</div>

```
:::

### 主题描述

<div class="demo-block">
  <div class="meida-demo" >
     <hyx-media class="hyx-media-demo" src="http://www.170mv.com/kw/other.web.rj01.sycdn.kuwo.cn/resource/n3/2/63/3890495760.mp3" title="呜呜呜呜呜呜呜呜">
     </hyx-media>
     <hyx-media class="hyx-media-demo" src="http://124.42.103.156:8089/group1/M00/12/29/CgrQc176_fOAfWl1ACVUV6IVQhs429.mp4" title="呜呜呜呜呜呜呜呜">
     </hyx-media>
     <hyx-media  class="hyx-media-demo" src="http://124.42.103.156:8089/group1/M00/12/8C/CgrQc1-ffv-AWFh1AAApsORQfjg796.jpg" title="呜呜呜呜呜呜呜呜">
     </hyx-media>

  </div>
</div>




::: demo
```html
<style>
  .hyx-media-demo{
    width:224px;
    height:144px;
    margin-right: 10px;
    margin-bottom: 10px;
  }
</style>

<div class="demo-block">
  <div class="meida-demo" >
     <hyx-media class="hyx-media-demo" src="http://www.170mv.com/kw/other.web.rj01.sycdn.kuwo.cn/resource/n3/2/63/3890495760.mp3" title="呜呜呜呜呜呜呜呜">
     </hyx-media>
     <hyx-media class="hyx-media-demo" src="http://124.42.103.156:8089/group1/M00/12/29/CgrQc176_fOAfWl1ACVUV6IVQhs429.mp4" title="呜呜呜呜呜呜呜呜">
     </hyx-media>
     <hyx-media  class="hyx-media-demo" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" title="呜呜呜呜呜呜呜呜">
     </hyx-media>

  </div>
</div>



```
:::




## API

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| title | 卡片主题名称| String | — | - |
| src | 图片链接 音频链接 或者视频链接| String   | — | - |

