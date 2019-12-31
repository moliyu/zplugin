export const getdata = () => {
    return new Promise(
        function(resolve, reject) {
            if(true) {
                let data= [
                    { value: 'a的数据',name: 'a', cat:false},
                    { value: 'b的数据',name: 'b', cat: false}
                  ]
                resolve(data)
            }else {
                reject(new Error)
                
            }
        }
    )
}