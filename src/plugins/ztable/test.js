export const getdata = () => {
    return new Promise(
        function(resolve, reject) {
            if(true) {
                let data= [
                    { value: '1111111111111111111111111111111111',name: 'a', cat:false},
                    { value: 'b的数据',name: 'b', cat: false}
                  ]
                resolve(data)
            }else {
                reject(new Error)
                
            }
        }
    )
}