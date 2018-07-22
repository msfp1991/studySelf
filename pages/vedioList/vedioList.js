// pages/vedio/vedio.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoList: [
      {
        image: "https://video.acadsoc.com.cn/iesfiles/Cover/20180718/d1be998c-3ad6-4995-96a2-e6af36406ee5.jpg",
        title: "我正在找人参与冒险！",
        video_address: "https://video.acadsoc.com.cn/iesfiles/video/20180718/c91b42d7-ce2d-424f-ac02-14a6d8595610.mp4"
      },
      {
        image: "https://video.acadsoc.com.cn/iesfiles/Cover/20180623/6a89ea66-016e-4d3d-a68d-3961c0d6c63c.jpg",
        title: "英文儿歌-蔬菜！",
        video_address: "https://video.acadsoc.com.cn/iesfiles/video/20180623/acb22def-6a2f-4716-b3aa-fba0959ad614.mp4"
      },
      {
        image: "https://video.acadsoc.com.cn/iesfiles/Cover/20180621/9749069b-398d-419e-b71d-53f623b7c21f.jpg",
        title: "科比 退役仪式感人短片！",
        video_address: "http://video.acadsoc.com.cn/iesfiles/video/20180621/49b94ac6-3656-429d-a446-ee5ce8f73781.mp4"
      },
      {
        image: "https://video.acadsoc.com.cn/iesfiles/Cover/20180322/aa49bbe0-4c8d-4f49-a5a3-9a48e340d253.jpg",
        title: "My Heart Will Go On！",
        video_address: "http://video.acadsoc.com.cn/iesfiles/video/20180322/113100d7-c341-450c-b8e0-36a99bf77bfa.mp4"
      },

    ],
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  
  },
  govideo:function(e){
    var index=e.currentTarget.dataset.index;
    let { videoList}=this.data;
    wx.navigateTo({
      url: '../video/video?title=' + encodeURI(videoList[index].title) + "&src=" + encodeURI(videoList[index].video_address),
    })
  }
})