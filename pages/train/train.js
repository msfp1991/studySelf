var myPluginInterface = requirePlugin('myPlugin');
const innerAudioContext = wx.createInnerAudioContext();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'g', 'k', 'l', 'm', 'n', 'o',
      'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    circular:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let {imgUrls}=this.data;
    this.produceAudio(imgUrls[0]);
   // this.playVoice('./text2audio.mp3');
  
  },
  
  /**
   * 生成音频文件
   */
  produceAudio:function(content){
     var that = this;
    // myPluginInterface.textToSpeech({
    //   lang: "en_US",
    //   tts: true,
    //   content: content,
    //   success: function (res) {
    //     console.log("succ tts", res.filename)
    //     that.playVoice(res.filename);
    //   },
    //   fail: function (res) {
    //     console.log("fail tts", res)
    //   }
    // })
     console.log('http://tts.baidu.com/text2audio?lan=en&ie=UTF-8&spd=2&text=' + content);
     that.playVoice('http://tts.baidu.com/text2audio?lan=en&ie=UTF-8&spd=2&text=' + content);
    
  },
  /**
   * 播放音乐
   */

  playVoice:function(src){
    //innerAudioContext.destroy();
    //innerAudioContext = wx.createInnerAudioContext();
    innerAudioContext.stop();
    innerAudioContext.autoplay = true;
    innerAudioContext.obeyMuteSwitch=false;
    innerAudioContext.src = src;
    innerAudioContext.onPlay(() => {
      console.log('开始播放')
      
    })
    innerAudioContext.onEnded(() => {
    //innerAudioContext.destroy();
     // console.log('开始播放')

    })
    innerAudioContext.onError((res) => {
      console.log(res.errMsg)
      console.log(res.errCode)
    })
  },
  bindchange:function(e){
    console.log(e.detail.current);
    let { imgUrls}=this.data;
    this.produceAudio(imgUrls[e.detail.current]);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})