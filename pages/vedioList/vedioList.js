// pages/vedio/vedio.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoList: [
      {
        image: "https://v.haoshanxi.com/uploads/allimg/180720/1-1PH01G3080-L.jpg",
        news_show_type: 20,
        title: "美女医生去解救人质，劫匪不放心，还对她进行搜身！",
        aid: "5895",
        channel: "18",
        video_address: "http://video.haoshanxi.com/b1512.mp4",
        video_play: "",
        videosurl: "",
        video_photo: "",
        pubTimestamp: "1532077983",
        pubDate: "2018-07-20",
        category: "",
        red_tag: "",
        author: "西瓜视频",
        face: "https://v.haoshanxi.com/uploads/face/2.png",
        digg: "13",
        pl: "0",
        click: "935",
      },
      {
        image: "https://v.haoshanxi.com/uploads/allimg/180720/1-1PH01G2540-L.jpg",
        news_show_type: 20,
        title: "结婚刚一年，女子出差回家发现丈夫出轨，不考虑孩子果断选择离婚",
        aid: "5894",
        channel: "18",
        video_address: "http://video.haoshanxi.com/b1511.mp4",
        video_play: "",
        videosurl: "",
        video_photo: "",
        pubTimestamp: "1532077953",
        pubDate: "2018-07-20",
        category: "",
        red_tag: "",
        author: "西瓜视频",
        face: "https://v.haoshanxi.com/uploads/face/2.png",
        digg: "12",
        pl: "0",
        click: "632",
      },
      {
        image: "https://v.haoshanxi.com/uploads/allimg/180720/1-1PH01G2180-L.jpg",
        news_show_type: 20,
        title: "武则天愤怒了，娘家亲侄子竟给自己这般抹黑，让亲儿子丢尽了脸",
        aid: "5893",
        channel: "18",
        video_address: "http://video.haoshanxi.com/b1510.mp4",
        video_play: "",
        videosurl: "",
        video_photo: "",
        pubTimestamp: "1532077935",
        pubDate: "2018-07-20",
        category: "",
        red_tag: "",
        author: "西瓜视频",
        face: "https://v.haoshanxi.com/uploads/face/2.png",
        digg: "3",
        pl: "0",
        click: "237",
      },
      {
        image: "https://v.haoshanxi.com/uploads/allimg/180720/1-1PH01G1520-L.jpg",
        news_show_type: 20,
        title: "见弟弟带来的女友是熟人，大叔直接叫女孩离开，弟弟直接懵了",
        aid: "5892",
        channel: "18",
        video_address: "http://video.haoshanxi.com/b1509.mp4",
        video_play: "",
        videosurl: "",
        video_photo: "",
        pubTimestamp: "1532077836",
        pubDate: "2018-07-20",
        category: "",
        red_tag: "",
        author: "西瓜视频",
        face: "https://v.haoshanxi.com/uploads/face/2.png",
        digg: "6",
        pl: "0",
        click: "425",
      },
      {
        image: "https://v.haoshanxi.com/uploads/allimg/180719/1-1PG91509440-L.jpg",
        news_show_type: 20,
        title: "曹操最优秀接班人：率军盗空17座皇帝陵，盗挖第18座时遭到天谴",
        aid: "5891",
        channel: "18",
        video_address: "http://video.haoshanxi.com/e1526.mp4",
        video_play: "",
        videosurl: "",
        video_photo: "",
        pubTimestamp: "1531984135",
        pubDate: "2018-07-19",
        category: "",
        red_tag: "",
        author: "西瓜视频",
        face: "https://v.haoshanxi.com/uploads/face/2.png",
        digg: "6",
        pl: "0",
        click: "562",
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