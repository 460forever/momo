/**
利用随机概率实现多账户运行

填写格式如下：


const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=28163755&pid=9b7d6cfb587c326207ef06dddc5953b9&tid=5c1d4033507f0c7391406367a440cd2c",
    "https://www.maimemo.com/share/page?uid=28163755&pid=9b7d6cfb587c326207ef06dddc5953b9&tid=5c1d4033507f0c7391406367a440cd2c",
    "https://www.maimemo.com/share/page?uid=28163755&pid=9b7d6cfb587c326207ef06dddc5953b9&tid=5c1d4033507f0c7391406367a440cd2c",
  ]
=====================以上为范例！=====================

=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
 */
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=28163755&pid=41e40e34ae85bd7dab6440fb414393a7&tid=f7d5e24d77c1d733f46823a176465fac",
    
  ]
  /**
   * 生成随机数字
   * @param {number} min 最小值（包含）
   * @param {number} max 最大值（不包含）
   */
  function randomNumber(min = 0, max = 100) {
    return Math.min(Math.floor(min + Math.random() * (max - min)), max);
  }
  const MMSL_random = MMSLS[randomNumber(0, MMSLS.length)];
  
  module.exports = {
    MMSL_random
  }
