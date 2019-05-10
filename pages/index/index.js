//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    tasks:getApp().globalData.tasks,
    newTask: '',
    key: 0
  },

  changeTaskStatus: function (e) {
    let value = e.currentTarget.dataset.value;

    let tasks = this.data.tasks;

    let index = tasks.findIndex(task => task.value == value);

    if (index < 0) {
      return;
    }

    tasks[index].checked = !tasks[index].checked;

    this.setData({
      tasks: tasks
    });

  },

  typeNewTask: function (e) {
    this.setData({
      newTask: e.detail.value.trim()
    });
  },

  removeTask: function (e) {
    let value = e.currentTarget.dataset.value;

    let tasks = this.data.tasks;

    let newTasks = tasks.filter(task => task.value != value);

    getApp().globalData.tasks=newTasks;

    this.setData({
      tasks:newTasks,
    });

    getApp().globalData.tasks=tasks;

  },

  information:function(e){
    let value1=e.currentTarget.dataset.value;
    console.log(e.currentTarget.dataset.value);

    getApp().globalData.value1 = value1;

    console.log("点击详情按钮时得到的value",getApp().globalData.value1);

    wx.navigateTo({
      url:"../infor/infor",
    })
  },

  add:function(e){
    getApp().globalData.value1=-1;

    wx.redirectTo({
      url:'../infor/infor'
    })
  },

  onLoad:function(options){

    this.setData({
      tasks: app.globalData.tasks
    })

    console.log(app.globalData.tasks.length);
    
  },

  onUnload:function(){
    app.globalData.tasks=this.data.tasks;
  },

})