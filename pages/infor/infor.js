// pages/infor/infor.js

var app=getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    tasks:app.globalData.tasks,
    title:'',
    content:'',
    value1:app.globalData.value1,
    key:0,


  },


  inputtitle: function (e) {
    this.setData({
      title: e.detail.value
    })
  },

  inputcontent:function(e){
    this.setData({
      content:e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let value1=app.globalData.value1;
    
    console.log('radio发生的change事件，携带value值为：',value1);

    let tasks = app.globalData.tasks;

    if (value1 != -1){

      let tasks = app.globalData.tasks;
      
      let newTask = getApp().globalData.tasks.filter(task => task.value == getApp().globalData.value1);

      let newa = newTask.map(a => a.title);

      let newb = newTask.map(a => a.content);

      this.setData({
        content:newb[0],

        title:newa[0],
      });

    }

    this.setData({
      value1:app.globalData.value1,
      
      tasks:tasks,
    })

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
    app.globalData.tasks = this.data.tasks;

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

openAlert: function () {

  console.log(this.data.title);
      if (this.data.title) {
      if(this.data.value1!=-1){
        console.log(this.data.title);

        let value1 = app.globalData.value1;

        let tasks = app.globalData.tasks;

        let newTasks = tasks.filter(task => task.value != value1);

        getApp().globalData.tasks = newTasks;

        let newTask = {
          title: this.data.title,
          content: this.data.content,
          checked: false,
          value:app.globalData.value1,
        }

        getApp().globalData.tasks.push(newTask);

        console.log(app.globalData.tasks);

        wx.navigateTo({
          url: '../index/index',
        })

      }
      else {
        let key=app.globalData.key;

        let tasks = getApp().globalData.tasks;

        let newTask = {
          title: this.data.title,
          content: this.data.content,
          value: ++app.globalData.key,
          checked: false
        };

        console.log(newTask);

        getApp().globalData.tasks.push(newTask);

        console.log(getApp().globalData.tasks);

        this.setData({
          title: '',
          content: ''
        });
        wx.redirectTo({
           url: '../index/index'
        })
        
    }
    }
    else {
      wx.showModal({
        content: '请输入标题',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      });
    }
  }

})


