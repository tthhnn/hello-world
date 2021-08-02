export const request=(params)=>{
    // 定义公共的url
    const baseUrl="https://api-hmugo-web.itheima.net/api/public/v1"
    return new Promise((resolove,reject)=>{
        wx.request({
        ...params,    
        url:baseUrl+params.url,
        success: (result) =>{
            resolove(result.data.message);
        },
        fail:(err)=>{
            reject(err);
        }
        })
    })
}